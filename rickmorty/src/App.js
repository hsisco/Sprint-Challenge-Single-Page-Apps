import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';
import CharacterCard from './components/CharacterCard';

function App() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
      setSearch(response.data.results)
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });
  }, []);
  
  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const searchCharacter = character.filter(person => {
    if (person.name === search.name) {
      return(
        <CharacterCard character={setCharacter} />
      );
    } else {
      return "Character not found";
    }
  });

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container fluid>
        <h1>"What up my Glip Glops?!"</h1>
        </Container>
      </Jumbotron>
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
          <button type="submit">Search Characters</button>
        </div>
      <Route path="/" component={CharacterCard} />
    </div>
  );
}

export default App;
