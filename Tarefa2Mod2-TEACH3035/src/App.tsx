import React, { useState, useEffect } from 'react';
import { Movie } from './types/Movie';
import { fetchMovies } from './services/movieService';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MovieTable } from './components/MovieTable';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.nome.toLowerCase().includes(filter.toLowerCase()) ||
    movie.genero.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <Header>
        <SearchBar value={filter} onChange={setFilter} />
      </Header>
      
      <main className="app-main">
        <MovieTable movies={filteredMovies} />
      </main>
    </div>
  );
}

export default App;
