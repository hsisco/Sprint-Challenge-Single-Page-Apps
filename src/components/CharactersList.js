import React from 'react';
import CharacterCard from './CharacterCard';

function CharactersList(props) {
  const characters = props.characters || [];
  return (
    <div className="character-page">
      {characters.map(character => (
      <CharacterCard key={character.id} {...character} />
      ))}

</div>
  );
}

export default CharactersList;
