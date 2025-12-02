import { Theme } from '../types/theme';

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#7159c1',
    secondary: '#0388CA',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    textSecondary: '#666666',
    border: '#e0e0e0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#9580ff',
    secondary: '#4facfe',
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    border: '#404040',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
};
