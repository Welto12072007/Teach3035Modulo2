import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from './components/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import { useTheme } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <GlobalStyle theme={theme} />
      <Home />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
