import React, { useState, useEffect } from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';
import CharacterCard from './CharacterCard';

const SearchForm = (props) => {
  const characters = props.characters;

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {

    const results = characters.filter(person => person.name === searchValue);
    setSearchResults(results);
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
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
    <div>
      {searchResults.map(item => {
        return (
          <CharacterCard key={item.id}  />
        )})}
    </div>
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