import { API_BASE_URL, POKEMON_LIMIT, POKEMON_OFFSET } from '../constants/api';
import { PokemonAPIResponse, PokemonDetails, Pokemon } from '../types/pokemon';

export const fetchPokemonList = async (
  limit: number = POKEMON_LIMIT,
  offset: number = POKEMON_OFFSET
): Promise<Pokemon[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    
    if (!response.ok) {
      throw new Error('Falha ao buscar lista de Pokémon');
    }

    const data: PokemonAPIResponse = await response.json();
    
    const pokemonDetailsPromises = data.results.map(pokemon => 
      fetchPokemonDetails(pokemon.url)
    );
    
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);
    
    return pokemonDetails.map(details => ({
      id: details.id,
      name: details.name,
      url: `${API_BASE_URL}/pokemon/${details.id}`,
      image: details.sprites.other['official-artwork'].front_default,
      types: details.types.map(type => type.type.name)
    }));
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar detalhes do Pokémon');
    }

    const data: PokemonDetails = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do Pokémon:', error);
    throw error;
  }
};
