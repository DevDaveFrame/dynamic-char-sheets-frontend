import React from 'react';
import Navbar from "./components/NavBar";
import CharSheet from './containers/CharSheet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CharSheet />
    </div>
  );
}

export default App;
