import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron, Container, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {CharacterList} from './CharacterList';
import LocationsList from './LocationsList';

export const WelcomePage= () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
      const results = characters.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()));
      setCharacters(results);
    }, [searchValue])
    });

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleSearch = (e) => {
    e.preventDefault();
  }
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
          <Link to="/characters">
            <Button>
              <span>All Characters</span>
            </Button>
          </Link>
        </Container>
      </Jumbotron>
      </div>

    <div className="search">
    <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Input 
          type="text" 
          placeholder="Character Name"
          value={searchValue}
          onChange={handleInputChange}/>
          <Button 
          type="submit" 
          onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>

        <Link to="/characters">Here's Everybody</Link>
        <Link to="/locations">All the Places</Link>

        <Route path="/characters" render={() => <CharacterList />}/> 
        <Route path="/locations" render={() => <LocationsList />}/> 

      </header>
      
    </section>
  );
}
