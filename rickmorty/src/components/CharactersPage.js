import React from 'react';
// import { Route } from 'react-router-dom';
import CharacterCard from './CharacterCard';

function CharacterPage(props) {
  const characters = props.characters || [];
  return (
    <div className="character-page">
      {characters.map(character => (
        <CharacterCard key={character.id} {...character} />
      ))}

</div>
  );
}

export default CharacterPage;
