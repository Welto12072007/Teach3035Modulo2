import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PokemonGrid } from './components/PokemonGrid';
import { LoadMoreButton } from './components/LoadMoreButton';
import { fetchPokemonList } from './services/pokemonService';
import { Pokemon } from './types/pokemon';
import { POKEMON_LIMIT } from './constants/api';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppContainer, MainContent, Footer, FooterOverlay, FooterContent, FooterText, FooterSubText, FooterLink } from './App.styles';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const loadPokemons = async (currentOffset: number, isLoadMore: boolean = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      
      setError(null);
      const data = await fetchPokemonList(POKEMON_LIMIT, currentOffset);
      
      if (isLoadMore) {
        setPokemons(prev => [...prev, ...data]);
      } else {
        setPokemons(data);
      }
    } catch (err) {
      setError('Não foi possível carregar os Pokémon. Tente novamente mais tarde.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadPokemons(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    const newOffset = offset + POKEMON_LIMIT;
    setOffset(newOffset);
    loadPokemons(newOffset, true);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        
        <MainContent>
          <PokemonGrid 
            pokemons={pokemons} 
            loading={loading} 
            error={error} 
          />
          
          {!loading && !error && pokemons.length > 0 && (
            <LoadMoreButton 
              onClick={handleLoadMore} 
              loading={loadingMore} 
            />
          )}
        </MainContent>

        <Footer>
          <FooterOverlay />
          <FooterContent>
            <FooterText>
              Desenvolvido com React + TypeScript + Styled Components
            </FooterText>
            <FooterSubText>
              Dados fornecidos pela <FooterLink 
                href="https://pokeapi.co" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                PokéAPI
              </FooterLink>
            </FooterSubText>
          </FooterContent>
        </Footer>
      </AppContainer>
    </>
  );
};

export default App;
