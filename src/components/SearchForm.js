import React, { useState, useEffect } from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';
import CharacterCard from './CharacterCard';

const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const characters = props.characters || [];

  const searchCharacter = () => {
    characters.filter(person => person.name === searchValue);
  }

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
    // searchCharacter();
  }

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Input placeholder="Character Name" onChange={handleSearchInputChanges}/>
          <Button type="submit" onClick={handleSearch}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {searchValue && searchCharacter() ? (
        <CharacterCard key={searchCharacter().id} {...searchCharacter() } /> 
      ) : (
        <h2> No characters matched your search </h2>
      )}
    </div>
  );
};

export default SearchForm;

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