import React, { useState } from 'react'
import MovieCards from './MovieCards'
import { movies } from './Movies'
import './MovieApp.css'
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { RiResetLeftFill } from "react-icons/ri";

function MovieApp() {

    // state for search
    const [searchTerm, setSearchTerm] = useState('')

    // state for genre
    const [selectedGenre, setSelectedGenre] = useState('All')

    // state for sorting
    const [sortBy, setSortBy] = useState('')

    // state for liked movies
    const [likedMovies, setLikedMovies] = useState([])

    const handleLike = (title) => {
        setLikedMovies((prev) =>
            prev.includes(title)
                ? prev.filter((t) => t !== title)
                : [...prev, title]
        );
    };

    // movie genre
    const genres = ['All', ...new Set(movies.map((movie) => movie.genre))]

    // function to reset everything
    const handleReset = () => {
        setSearchTerm('');
        setSelectedGenre('All');
        setSortBy('');
        setLikedMovies([]);
    }

    const filteredMovies = movies.filter(movie => {
        const searchLower = searchTerm.toLowerCase();
        const matchedSearch =
            movie.title.toLowerCase().includes(searchLower) ||
            movie.genre.toLowerCase().includes(searchLower) ||
            movie.director.toLowerCase().includes(searchLower) ||
            movie.cast.some(actor => actor.toLowerCase().includes(searchLower)) ||
            movie.year.toString().includes(searchLower)
        const matchedGenre = selectedGenre === 'All'
            ? true
            : selectedGenre === 'Favorites'
                ? likedMovies.includes(movie.title)
                : movie.genre === selectedGenre
        return matchedSearch && matchedGenre;
    })

    const sortedMovies = [...filteredMovies].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'year':
                return b.year - a.year;
            case 'genre':
                return a.genre.localeCompare(b.genre);
            case 'title':
            default:
                return a.title.localeCompare(b.title);
        }
    })

    return (
        <div className='movie-app'>
            <h1 className='heading'>Top Movies App</h1>
            <div className='search-section'>
                <div className='search-wrapper'>
                    {!searchTerm && <BsSearch className='search-icon' />}
                    <input
                        className='search-input'
                        type='text'
                        placeholder='Enter movie, genre or actor here...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && <RxCross2 className='cross-btn' height={"20px"} width={"24px"} onClick={() => setSearchTerm('')} />}
                </div>
                <button className='reset-btn' onClick={handleReset}>{<RiResetLeftFill />}Reset</button>
            </div>
            <div className='filter-section'>
                <h4>Filter by Genre:</h4>
                <div className='genre-cards'>
                    {genres.map((genre, index) => {
                        return <button
                            className={`genre-chip ${selectedGenre === genre ? "genre-chip-active" : ""}`}
                            key={genre}
                            onClick={() => { setSelectedGenre(genre) }}
                        >{genre}</button>
                    })}
                    <button
                        className={`genre-chip ${selectedGenre === 'Favorites' ? "genre-chip-active" : ""}`}
                        onClick={() => setSelectedGenre('Favorites')}>
                        ♡ Favorites {likedMovies.length > 0 && `(${likedMovies.length})`}
                    </button>

                    {(searchTerm || selectedGenre !== 'All') && <button className='clear-filter' onClick={() => {
                        setSearchTerm('');
                        setSelectedGenre('All')
                    }}>Clear All Filters</button>}
                </div>
            </div>
            <div className='sort-section'>
                <label htmlFor='sort-select'>Sort By: </label>
                <select id='sort-select' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='rating'>Ratings - High to Low</option>
                    <option value='year'>Year - Newest First</option>
                    <option value='genre'>Genre - A to Z</option>
                    <option value='title'>Movie - A to Z</option>
                </select>
            </div>
            {sortedMovies.length > 0
                ? <MovieCards m={sortedMovies} handleLike={handleLike} likedMovies={likedMovies} />
                : <div><h3>No Movies Available for these search/filters</h3>
                <p>Try again by changing filters/search</p>
                </div>
            }
        </div>
    )
}

export default MovieApp