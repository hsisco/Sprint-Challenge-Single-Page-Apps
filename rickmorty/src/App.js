import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import CharactersPage from './components/CharactersPage';
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });
  }, [characters]);

  return (
    <div className="App">
      <Home>
          <CharactersPage>
            <SearchForm />
            <CharacterCard />
        </CharactersPage>
      </Home>
      
      <Route exact path="/" component={Home} />
  </div>
  );
}

export default App;
