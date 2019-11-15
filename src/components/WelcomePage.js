import React from "react";
import { Route, Link } from 'react-router-dom';
import { CharacterList } from "./CharacterList";

export const WelcomePage= () => {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">Here's Everybody</Link>
        <Route path="/characters" render={() => <CharacterList />}/> 
      </header>
    </section>
  );
}
