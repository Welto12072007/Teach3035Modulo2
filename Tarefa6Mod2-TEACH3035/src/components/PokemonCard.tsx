import React from 'react';
import { Pokemon } from '../types/pokemon';
import { capitalizeFirstLetter, formatPokemonId, getTypeColor } from '../utils/helpers';
import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardContent,
  CardInfo,
  CardId,
  CardName,
  CardTypes,
  TypeBadge,
} from './PokemonCard.styles';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
        />
      </CardImageContainer>
      
      <CardContent>
        <CardInfo>
          <CardId>{formatPokemonId(pokemon.id)}</CardId>
          <CardName>{capitalizeFirstLetter(pokemon.name)}</CardName>
        </CardInfo>
        
        <CardTypes>
          {pokemon.types.map((type) => (
            <TypeBadge key={type} $bgColor={getTypeColor(type)}>
              {type}
            </TypeBadge>
          ))}
        </CardTypes>
      </CardContent>
    </CardContainer>
  );
};
