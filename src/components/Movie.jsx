import React from 'react'

const Movie = ({image, title, genres, plot, imDbRating}) => {
  return (
    <div className="film">
      <div className="film_post">
        <img className="film_image" src={image} alt={title} />
        <span className="">{imDbRating}</span>
      </div>
      <h3 className="mt-0 font-bold">{title}</h3>
      <div className="absolute bg-black max-w-full p-4 text-amber-300 
        left-0 right-0 bottom-0">
          {plot}
      </div>
    </div>
  )
}

export default Movie