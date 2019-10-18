import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const searchCharacters = character.filter(person => {
    person.name() === search.name;
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>"What up my Glip Glops?!"</h1>
      </header>

    </div>
  );
}

export default App;
