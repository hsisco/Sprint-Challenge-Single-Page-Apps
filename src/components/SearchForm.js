import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

export function SearchForm(props) {
  const characters = props.characters;
  
  const [query, setQuery] = useState({name: ""});
  const results = characters.filter(person => person.name === query);

  const handleInputChange = (e => {
    setQuery(e.target.value)
  });


  return (
    <section className="search-form">
      <form>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      {results.map(i => {
        return <CharacterCard key={i.id} name={i.name} status={i.status} />;
      })}
    </section>
  );
}

  // const defaultObject = {
  //     "id": 1,
  //     "name": "Rick Sanchez",
  //     "status": "Alive",
  //     "species": "Human",
  //     "type": "",
  //     "gender": "Male",
  //     "origin": {
  //       "name": "Earth (C-137)",
  //       "url": "https://rickandmortyapi.com/api/location/1"
  //     },
  //     "location": {
  //       "name": "Earth (Replacement Dimension)",
  //       "url": "https://rickandmortyapi.com/api/location/20"
  //     },
  //     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //     "url": "https://rickandmortyapi.com/api/character/1",
  //     "created": "2017-11-04T18:48:46.250Z"
  //   }