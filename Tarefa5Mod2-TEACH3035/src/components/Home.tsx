import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  Container,
  Card,
  Title,
  Subtitle,
  ButtonContainer,
  FeatureList,
  FeatureItem,
} from '../styles/components';

export const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Card theme={theme}>
        <Title theme={theme}>Alternador de Tema</Title>
        <Subtitle theme={theme}>
          Clique no botão abaixo para alternar entre os modos claro e escuro. 
        </Subtitle>

        <ButtonContainer>
          <ThemeToggle />
        </ButtonContainer>
      </Card>
    </Container>
  );
};
