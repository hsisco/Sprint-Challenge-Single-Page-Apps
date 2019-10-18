import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CardDeck() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const searchCharacter = character.filter(person => {
    person.name() === (search.name);

  });
  return(
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
  );
}

export default CardDeck;

