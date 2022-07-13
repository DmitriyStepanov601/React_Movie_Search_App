import { useState, useEffect } from 'react';
import './App.css';
import Movie from "./components/Movie";

const FEATURED_API = 
	"https://imdb-api.com/API/AdvancedSearch/k_k8zws5y8?user_rating=1.0,10&groups=top_250&count=100&sort=alpha,asc";
	
const SEARCH_API = "https://imdb-api.com/API/AdvancedSearch/k_k8zws5y8/?title=";

function App() {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		getMovies(FEATURED_API);
	}, []);

	const getMovies = (API) => {
		fetch(API)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setMovies(data.results)
		})
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if(search){
			getMovies(SEARCH_API+search)
			setSearch("");
		}
	}

	const handleOnChange = (e) => {
		setSearch(e.target.value);
	}

	return (
		<>	
			<header>
				<form onSubmit={handleOnSubmit}>
					<input className="search" 
						type="text" 
						placeholder="Search..."
						value={search}
						onChange={handleOnChange}
					/>
				</form>
			</header>	
			<div className="movies">
				{ movies.map(movie => (
					<Movie 
						key = { movie.id }
						title = { movie.title }
						image = { movie.image }
						genres = { movie.genres }
						plot = {  movie.plot }
						imDbRating = {  movie.imDbRating }
					/>
				))}
			</div>
		</>
	);
}

export default App;
