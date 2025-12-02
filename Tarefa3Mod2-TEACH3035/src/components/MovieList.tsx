import React from 'react';
import { Movie } from '../types/Movie';
import '../styles/MovieList.css';

type MovieListProps = {
  movies: Movie[];
  onMovieCheck: (movie: Movie) => void;
}

export const MovieList = ({ movies, onMovieCheck }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <label className="movie-checkbox-label">
            <input
              type="checkbox"
              checked={movie.checked}
              onChange={() => onMovieCheck(movie)}
              className="movie-checkbox"
            />
            <span className="movie-name">{movie.nome}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
