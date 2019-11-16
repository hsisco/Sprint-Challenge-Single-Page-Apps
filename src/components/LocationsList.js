import React from 'react';
import LocationCard from './LocationCard';

function LocationsList(props) {
  const locations = props.locations || [];
  return (
    <div className="character-page">
      {locations.map(location => (
        <LocationCard key={location.id} {...location} />
      ))}
    </div>
  );
}

export default LocationsList;