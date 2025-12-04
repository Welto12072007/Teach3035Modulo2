import { typeColors } from '../styles/theme';

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatPokemonId = (id: number): string => {
  return `#${id.toString().padStart(3, '0')}`;
};

export const getTypeColor = (type: string): string => {
  return typeColors[type] || typeColors.normal;
};
