import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js'
import SearchForm from './SearchForm.js';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const charList = res.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        )
        setCharacters(charList);
      })
      .catch(error => {
        console.log(error);
      })
  }, [query]);

  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery} />
      {characters.map(character => (
        <CharacterCard 
        key={character.name} 
        {...character} />
      ))}
    </section>
  );
}
