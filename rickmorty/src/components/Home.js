import React from 'react';
import { Route } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import CharactersPage from './CharactersPage';


const Home = (props) => {
  const characters = props.characters;

  return (
    <div className="home">
      <Jumbotron fluid>
        <Container fluid>
          <h1>"What up my Glip Glops?!"</h1>
        </Container>
      </Jumbotron>

        <Route render={(props) => <CharactersPage {...props} characters={characters} />} />
    </div>
  );
};

export default Home;