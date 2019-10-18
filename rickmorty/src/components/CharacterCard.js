import React from 'react';

function Card(props) {
  return(
    image={props.image}
    name={props.name}
    species={props.species}
    origin={props.origin}
    character={props.searchCharacter}
    );
}

export default Card;