import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


function CharacterCard(props) {

  return(
    <div>
    <Card>
      <CardImg top width="20%" src={props.image} alt={`Image of ${props.name} from Rick and Morty.`} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>A {props.species} from {props.origin.name}.</CardText>
        <CardText>
          <small className="text-muted">Created: {props.created}</small>
        </CardText>
      </CardBody>
    </Card>
    </div>
  
  );
}

export default CharacterCard;