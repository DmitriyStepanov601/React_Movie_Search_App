import React from 'react'

const Movie = ({image, title, genres, plot, imDbRating}) => {
  return (
	<div className="flex">
		<img className="float-left w-full m-4 rounded" 
			src={image} alt=""/> 
		<div className="flex items-center justify-between">
			<h5 className="text-right">{title}</h5>
			<p className="text-right">
				{plot} 
			</p>
			<p className="text-right">{genres}</p>
			<span className="">{imDbRating}</span>
		</div>
	</div>
  )
}

export default Movie