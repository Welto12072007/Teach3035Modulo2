import React from 'react';
import { Movie } from '../types/Movie';
import '../styles/MovieTable.css';

type MovieTableProps = {
  movies: Movie[];
}

export const MovieTable = ({ movies }: MovieTableProps) => {
  return (
    <>
      <table className="movies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>
                <img src={movie.imagem} alt={movie.nome} className="movie-image" />
              </td>
              <td>{movie.nome}</td>
              <td>{movie.genero}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {movies.length === 0 && (
        <p className="no-results">Nenhum filme encontrado.</p>
      )}
    </>
  );
};
