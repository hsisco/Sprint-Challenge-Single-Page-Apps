import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import CharacterList from './CharacterList';
import SearchForm from './SearchForm';

const Home = (props) => {
  return (
    <div className="home">
      <Jumbotron fluid>
        <Container fluid>
          <h1>"What up my Glip Glops?!"</h1>
        </Container>
      </Jumbotron>

      <CharacterList>
        <SearchForm />
      
      </CharacterList>
    </div>
  );
};

export default Home;