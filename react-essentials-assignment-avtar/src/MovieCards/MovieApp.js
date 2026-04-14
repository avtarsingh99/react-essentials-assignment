import React, { useState } from 'react'
import MovieCards from './MovieCards'
import { movies } from './Movies'
import './MovieApp.css'

function MovieApp() {

    // state for search
    const [searchTerm, setSearchTerm] = useState('')

    // state for genre
    const [selectedGenre, setSelectedGenre] = useState('All')

    // state for sorting
    const [sortBy, setSortBy] = useState('')

    // movie genre
    const genres = ['All', ...new Set(movies.map((movie)=> movie.genre))]

    const filteredMovies = movies.filter(movie =>{
        const searchLower = searchTerm.toLowerCase();
        const matchedSearch = 
        movie.title.toLowerCase().includes(searchLower) ||
        movie.genre.toLowerCase().includes(searchLower) ||
        movie.director.toLowerCase().includes(searchLower) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchLower)) ||
        movie.year.toString().includes(searchLower)
        const matchedGenre = selectedGenre === 'All' || movie.genre === selectedGenre
        return matchedSearch && matchedGenre;
    })

    const sortedMovies = filteredMovies.sort((a,b)=> {
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
            <input
                className='search-input'
                type='text'
                placeholder='Enter movie, genre or actor here...' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='filter-section'>
                <h4>Filter by Genre:</h4>
                <div className='genre-cards'>
                    {genres.map((genre)=>{
                       return <button 
                        className='genre-chip'
                        key={genre}
                        onClick={()=>{setSelectedGenre(genre)}}
                        >{genre}</button>
                    })}
                    {(searchTerm || selectedGenre !== 'All') && <button className='clear-filter' onClick={()=>{
                        setSearchTerm('');
                        setSelectedGenre('All')
                    }}>Clear All Filters</button>}
                </div>
            </div>
            <div className='sort-section'>
                <label htmlFor='sort-select'>Sort By: </label>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                    <option value='rating'>Ratings - High to Low</option>
                    <option value='year'>Year - Newest First</option>
                    <option value='genre'>Genre - A to Z</option>
                    <option value='title'>Movie - A to Z</option>
                </select>
            </div>
            <MovieCards m={sortedMovies}/>
        </div>
    )
}

export default MovieApp
