import { useState, useEffect } from 'react';
import './App.css';
import Movie from "./components/Movie";

const API_KEY = "k_k8zws5y8";
const FETURED_API ="https://imdb-api.com/API/AdvancedSearch/${API_KEY}/?title=inception";

function App() {
	const [movies, setMovies] = useState([]);

	const searchMovies = async () => {
		const res = await fetch(FETURED_API);
		const data = await res.json();
		console.log(data);
		setMovies(data.results)
	};

	useEffect(() => {
		searchMovies()
	}, []);

	return (
		<div className="movies">
			{ movies.map(movie => (
				<Movie 
					key = { movie.id } 
					data = { movie }
				/>
			))}
		</div>
	);
}

export default App;
