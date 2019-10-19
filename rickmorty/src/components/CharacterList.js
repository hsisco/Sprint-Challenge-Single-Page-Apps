import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

function CharacterList(){
  const [character, setCharacter] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });
  }, []);

    return (
      <div className="character-list">
        {/* <SearchForm /> */}
        {character.map(person => (
          <CharacterCard key={person.id} person={person} />
        ))}
      </div>
  );
}

export default CharacterList;