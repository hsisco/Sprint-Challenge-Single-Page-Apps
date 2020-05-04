import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


function CharacterCard({ ...character }) {
  const { image, name, species, gender, origin, created } = character;

  return(
    <div>
    <Card>
      <CardImg top width="20%" src={image} alt={`Image of ${name} from Rick and Morty.`} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>A {species} {gender} from {origin.name}.</CardText>
        <CardText>
          <small className="text-muted">Created: {created}</small>
        </CardText>
      </CardBody>
    </Card>
    </div>
  
  );
}

export default CharacterCard;