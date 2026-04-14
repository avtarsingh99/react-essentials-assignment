import React, { useState } from 'react'
import { movies } from './Movies'
import './MovieCards.css';

function MovieCards({m}) {

  const [likedMovies, setLikedMovies] = useState([])

  const handleLike = (title)=>{
    if(likedMovies.includes(title)){
      setLikedMovies(likedMovies.filter(t=> t !== title))
    } else{
      setLikedMovies([...likedMovies, title])
    }
  }

  return (
    <div className='movie-ui'>
      {m.map((movie, index) => {
        const isLiked = likedMovies.includes(movie.title)
       return <div className='movie-card' key={movie.title}>
          <img className='movie-poster' alt={`${movie.title} 'poster'`} src={movie.image} />
          <div className='right-part'>
          <div className='rate-section'>
          <div className='movie-rating'>{movie.rating}</div>
          <button className={`like-btn ${isLiked? 'liked' : ''}`} onClick={()=>handleLike(movie.title)}>{isLiked?'❤️':'♡'}</button>
          </div>
            <h2 className='movie-title'>{movie.title}</h2>
            <div className='movie-info'>
              <p className='movie-year'>Year: {movie.year}</p>
              <p className='movie-genre'>Genre: {movie.genre}</p>
            </div>
            <div className='movie-cast'>Cast: {movie.cast.join(', ')}</div>
            <div className='movie-director'>Director: {movie.director}</div>
          </div>
        </div>
      })}
    </div>
  )
}

export default MovieCards
