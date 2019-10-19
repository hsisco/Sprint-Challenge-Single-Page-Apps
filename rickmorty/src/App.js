import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      {/* <Home>
        <CharacterList />
      </Home>
       */}
      <Route exact path="/" component={Home} />
      <Route  path="/characterlist" component={CharacterList} />

  </div>
  );
}

export default App;
