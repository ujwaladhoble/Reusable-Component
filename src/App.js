import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ItemList from './components/ItemList';
import ButtonExamples from './components/ButtonExamples';

const App = () => {
  return (
    <ThemeProvider>
      <div className="container py-4">
        <h1 className="mb-4">React Practical Task</h1>
        <ThemeToggle />
        <ButtonExamples />
        <ItemList />
      </div>
    </ThemeProvider>
  );
};

export default App;