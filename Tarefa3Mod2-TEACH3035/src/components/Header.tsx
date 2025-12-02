import React from 'react';
import '../styles/Header.css';

type HeaderProps = {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="app-header">
      <h1>Catálogo de Filmes</h1>
      {children}
    </header>
  );
};
