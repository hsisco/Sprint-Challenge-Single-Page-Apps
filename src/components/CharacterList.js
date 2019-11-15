import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Jumbotron } from 'reactstrap';
import { SearchForm } from "./SearchForm";
import { CharacterCard } from "./CharacterCard";


export function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <Jumbotron fluid>
        <h1>"What up my Glip Glops?!"</h1>
        <SearchForm {...characters} {...setCharacters} />
      </Jumbotron>

      {characters.map(character => (
        <CharacterCard key={character.id} {...character} />
      ))} 
    </section>
  );
}
