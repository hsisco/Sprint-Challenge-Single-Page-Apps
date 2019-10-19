import React, { useState } from 'react';
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap';
import CharacterCard from './CharacterCard';

const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const searchCharacter = props.character.filter(person => person.name === search.name
  );

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button value={search.name} onClick={handleSearch}>
            Search
          </Button>
        </InputGroupAddon>
        <Input placeholder="Character Name"/>
      </InputGroup>

      <CharacterCard search={searchCharacter} />
    </div>
  );
};

export default SearchForm;