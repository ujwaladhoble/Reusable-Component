import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './common/Button';

// Uses React Context API to switch between light and dark modes
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button  onClick={toggleTheme} variant={theme === 'light' ? 'light' : 'dark'}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggle;