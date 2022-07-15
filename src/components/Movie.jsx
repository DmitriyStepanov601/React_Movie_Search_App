import React from 'react'

const Movie = ({image, title, genres, plot, imDbRating}) => {
  return (
	<div className="grid-cols-2">
		<img className="" 
			src={image} alt=""/> 
		<div className="">
			<h5 className="">{title}</h5>
			<p className="">
				{plot} 
			</p>
			<p className="">{genres}</p>
			<span className="">{imDbRating}</span>
		</div>
	</div>
  )
}

export default Movie