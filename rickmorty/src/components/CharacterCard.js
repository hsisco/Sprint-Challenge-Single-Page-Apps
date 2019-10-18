import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function CharacterCard(props) {
  return(
    <div>
    <Card>
      <CardImg top width="100%" src={props.image} alt={`Image of ${props.name} from Rick and Morty.`} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>A {props.species} from {props.origin}.</CardText>
        <CardText>
          <small className="text-muted">{props.created}</small>
        </CardText>
      </CardBody>
    </Card>
    </div>
  );
}

export default CharacterCard;