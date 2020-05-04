import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function LocationCard(props) {
  return(
    <div>
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>Dimension: {props.dimension}.</CardText>
        <CardText>Type: {props.type}.</CardText>
        <CardText>
          <small className="text-muted">Created: {props.created}</small>
        </CardText>
      </CardBody>
    </Card>
    </div>
  
  );
}

export default LocationCard;