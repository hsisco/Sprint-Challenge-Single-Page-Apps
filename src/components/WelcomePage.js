import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import CharactersList from './CharactersList';
import LocationsList from './LocationsList';

export default function WelcomePage() {
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

        <Link to="/characters">Here's Everybody</Link>
        <Link to="/locations">All the Places</Link>

        <Route path="/characters" render={() => <CharactersList />}/> 
        <Route path="/locations" render={() => <LocationsList />}/> 

      </header>
      
    </section>
  );
}
