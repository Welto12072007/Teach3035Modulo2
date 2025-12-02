import React, { useState, useEffect } from 'react';
import { Movie } from './types/Movie';
import { fetchMovies } from './services/movieService';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string>('');

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  const handleMovieCheck = (movie: Movie) => {
    const updatedMovies = movies.map(m =>
      m.id === movie.id ? { ...m, checked: !m.checked } : m
    );
    setMovies(updatedMovies);

    if (!movie.checked) {
      setSelectedMovie(`Você selecionou: ${movie.nome}`);
    } else {
      setSelectedMovie('');
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="app-main">
        {selectedMovie && (
          <div className="message-box">
            {selectedMovie}
          </div>
        )}
        
        <MovieList movies={movies} onMovieCheck={handleMovieCheck} />
      </main>
    </div>
  );
}

export default App;
