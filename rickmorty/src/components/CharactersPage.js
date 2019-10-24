import React from 'react';
import { Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

function CharacterPage(props){
  const characters = props.characters;

  return (
    <div className="character-page">
      {characters && characters.map(person => (
        <CharacterCard key={person.id} person={person} />
      ))}

  <Route render={() => <SearchForm characters={characters} />} />
  {/* <Route render={(props) => <CharacterCard {...props} characters={characters} />} /> */}

</div>
  );
}

export default CharacterPage;