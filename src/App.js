import React from 'react';
import Navbar from "./components/Navbar";
import CharSheet from './containers/CharSheet';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CharSheet />
    </div>
  );
}

export default App;
