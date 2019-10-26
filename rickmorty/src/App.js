import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Home />}/>
    </div>
  );
}

export default App;
