export interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
  types: string[];
}

export interface PokemonAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasicInfo[];
}

export interface PokemonBasicInfo {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
