import React from 'react'
import './movie.css';

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
        />
        <h2 className="movie-title">{movie.title}</h2>
    </div>
  )
}

export default MovieCard