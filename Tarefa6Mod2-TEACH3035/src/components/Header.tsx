import React from 'react';
import { HeaderContainer, HeaderOverlay, HeaderContent, HeaderTitle, HeaderLine } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderOverlay />
      <HeaderContent>
        <HeaderTitle>Pokédex</HeaderTitle>
      </HeaderContent>
      <HeaderLine />
    </HeaderContainer>
  );
};
