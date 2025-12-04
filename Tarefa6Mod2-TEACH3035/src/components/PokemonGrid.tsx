import React from 'react';
import { Pokemon } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';
import {
  GridContainer,
  LoadingContainer,
  LoadingContent,
  Spinner,
  LoadingText,
  ErrorContainer,
  ErrorContent,
  ErrorTitle,
  ErrorMessage,
  EmptyContainer,
  EmptyText,
} from './PokemonGrid.styles';

interface PokemonGridProps {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

export const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons, loading, error }) => {
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <Spinner />
          <LoadingText>Carregando Pokémon...</LoadingText>
        </LoadingContent>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorContent>
          <ErrorTitle>❌ Erro ao carregar</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContent>
      </ErrorContainer>
    );
  }

  if (pokemons.length === 0) {
    return (
      <EmptyContainer>
        <EmptyText>Nenhum Pokémon encontrado</EmptyText>
      </EmptyContainer>
    );
  }

  return (
    <GridContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </GridContainer>
  );
};
