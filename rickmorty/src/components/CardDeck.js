import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

function CardDeck() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results)
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const searchCharacter = character.filter(person => {
    person.name() === (search.name);
  });

  return (
    character.map((person) => {
      return(
        <div className="cardDeck">
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
          </div>
          <CharacterCard 
            key={person.id}
            image={person.image}
            name={person.name}
            species={person.species}
            origin={person.origin}
            character={searchCharacter} />
        </div>    
      );
    })
  );
};

export default CardDeck;

