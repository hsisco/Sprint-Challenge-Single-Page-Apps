import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron, Container, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {SearchForm} from './SearchForm';
import CharactersList from './CharactersList';
import LocationsList from './LocationsList';

export const WelcomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });
  }, []);

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div className="home">
          <Jumbotron fluid>
            <Container fluid>
              <h1>"What up my Glip Glops?!"</h1>
            </Container>
          </Jumbotron>
        </div>

    <div className="search">
      <SearchForm characters={characters} />
    </div>

        <Link to="/characters">Here's Everybody</Link>
        <Link to="/locations">All the Places</Link>

        <Route path="/characters" render={() => <CharactersList characters={characters} />}/> 
        <Route path="/locations" render={() => <LocationsList />}/> 

      </header>
      
    </section>
  );
}
