import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron, Container, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import CharactersPage from './CharactersPage';


const Home = () => {
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

      <Route path="/characters" render={() => <CharactersPage characters={characters}/>} />
    </div>
  );
};

export default Home;