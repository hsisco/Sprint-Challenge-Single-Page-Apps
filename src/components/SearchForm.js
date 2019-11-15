import React, { useState } from "react";
import { Container, Form, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { CharacterCard } from "./CharacterCard";

export function SearchForm(props, { onSearch }) {
  const [search, setSearch] = useState({ name: "" });


  const handleInputChange = e => {
    setSearch(e.target.value);
  }
  const handleSearch = e => {
    e.preventDefault();
  }

  let searchedCharacters = props.characters.filter(person => {
    if (person.name.toLowerCase().includes(search.toLowerCase())){
      return person;
    } else {
      return null;
    }})

  return (
    <Container fluid> 
      <Form onSubmit={e => onSearch(e, search)}>
        <InputGroup className="SearchBar">
          <InputGroupAddon addonType="prepend" name="Search Characters By Name">
            <Input 
              className="search-bar"
              type="search"
              name="name"
              id="exampleSearch"
              // placeholder="Search Characters By Name"
              onChange={handleInputChange}
              value={search.name} />
          </InputGroupAddon>
          <Button type="submit" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Form>
      {searchedCharacters.map(character => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Container>
  );
}