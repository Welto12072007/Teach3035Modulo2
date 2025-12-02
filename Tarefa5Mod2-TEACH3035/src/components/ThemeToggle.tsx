import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ToggleButton, ToggleIconWrapper } from './ThemeToggle.styles';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} theme={theme} aria-label="Alternar tema">
      <ToggleIconWrapper theme={theme}>
        {theme.name === 'light' ? '☀️' : '🌙'}
      </ToggleIconWrapper>
    </ToggleButton>
  );
};
