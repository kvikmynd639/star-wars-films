import React, {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const [swFilm, setSWFilm] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function fetchStarWarsFilms() {
      const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
      let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Star%20Wars`);
      let data = await response.json();
      setSWFilm(data.results);
      setLoading(false);
    }
    fetchStarWarsFilms();
  }, []);
  const filteredFilms = swFilm.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">Star Wars Movies</h1>
      <input
        type="text"
        placeholder="Search Star Wars movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="movie-grid">
        {filteredFilms.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
