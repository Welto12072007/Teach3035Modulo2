import { Movie } from '../types/Movie';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch('/filmes.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading movies:', error);
    return [];
  }
};
