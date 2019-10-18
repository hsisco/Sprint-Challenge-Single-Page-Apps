import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard';

function App() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const searchCharacter = character.filter(person => {
    person.name() === (search.name);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>"What up my Glip Glops?!"</h1>
      </header>
      <div className="search">
        <h3>Search Characters by Name</h3>
        <label>
          <input
          type='text'
          name='searchField'
          value= {search.name}
          onChange={handleSearch}
          />
        </label>
        <CharacterCard character={searchCharacter} />
      </div>
    </div>
  );
}

export default App;
