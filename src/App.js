import React from 'react';
import Navbar from "./components/Navbar";
import CharSheet from './components/CharSheet';
import './App.css';
import FlashCard from './FlashCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CharSheet />
    </div>
  );
}

export default App;
