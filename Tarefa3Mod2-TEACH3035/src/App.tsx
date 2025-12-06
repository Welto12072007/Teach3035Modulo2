import React, { useState, useEffect } from 'react';
import { Movie } from './types/Movie';
import { fetchMovies } from './services/movieService';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

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
  };

  // Filtra todos os filmes que estão selecionados
  const selectedMovies = movies.filter(movie => movie.checked);

  return (
    <div className="app">
      <Header />
      
      <main className="app-main">
        {selectedMovies.length > 0 && (
          <div className="message-box">
            <strong>Filmes selecionados:</strong>
            <ul>
              {selectedMovies.map(movie => (
                <li key={movie.id}>{movie.nome}</li>
              ))}
            </ul>
          </div>
        )}
        
        <MovieList movies={movies} onMovieCheck={handleMovieCheck} />
      </main>
    </div>
  );
}

export default App;
