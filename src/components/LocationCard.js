import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


function LocationCard(props) {
  const { name, type, dimension, created } = props;

  return(
    <div>
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>Dimension: {dimension}.</CardText>
        <CardText>Type: {type}.</CardText>
        <CardText>
          <small className="text-muted">Created: {created}</small>
        </CardText>
      </CardBody>
    </Card>
    </div>
  
  );
}

export default LocationCard;