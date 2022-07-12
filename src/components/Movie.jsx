import React from 'react'

const Movie = (movie) => {
  return (
    <div>
      <p>{movie.title}</p>
      <img src={movie.image} alt={movie.title}/>
      <p>{movie.genres}</p>
      <span>{movie.imDbRating}</span>
    </div>
  )
}

export default Movie