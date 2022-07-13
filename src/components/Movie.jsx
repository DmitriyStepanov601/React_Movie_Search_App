import React from 'react'

const Movie = ({image, title, genres, plot, imDbRating}) => {
  return (
    <div>
      <h3> {title} </h3>
      <img src={image} alt={title}/>
      <p> {genres} </p>
      <p> {plot} </p>
      <span> {imDbRating} </span>
    </div>
  )
}

export default Movie