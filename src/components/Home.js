import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron, Container, Button } from 'reactstrap';
import CharactersPage from './CharactersPage';
import LocationsPage from './LocationsPage';
import SearchForm from './SearchForm';


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("Character data was not returned. Sad.", error);
    });

    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      console.log(response.data.results)
      setLocations(response.data.results);
    })
    .catch(error => {
      console.log("Location data was not returned. Sad.", error);
    });

  }, [!characters]);

  return (
    <div className="home">
      <Jumbotron fluid>
        <Container fluid>
          <h1>"What up my Glip Glops?!"</h1>
          <Link to="/">
            <Button>
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/characters">
            <Button>
              <span>All Characters</span>
            </Button>
          </Link>
          <Link to="/locations">
            <Button>
              <span>All Locations</span>
            </Button>
          </Link>
          <Link to="/search">
            <Button>
              <span>Search for a Character</span>
            </Button>
          </Link>
        </Container>
      </Jumbotron>

      <Route path="/search" render={() => <SearchForm characters={characters}/>} />
      <Route path="/characters" render={() => <CharactersList characters={characters}/>} />
      <Route path="/locations" render={() => <LocationsList locations={locations}/>} />
    </div>
  );
};

export default Home;