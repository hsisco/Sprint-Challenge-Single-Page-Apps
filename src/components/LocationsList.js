import React, { useState, useEffect } from 'react';
import axios from 'axios';import LocationCard from './LocationCard';

function LocationsList(props) {
  const [locations, setLocations] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      console.log(response.data.results)
      setLocations(response.data.results);
    })
    .catch(error => {
      console.log("Location data was not returned. Sad.", error);
    });

  }, []);
  return (
    <div className="character-page">
      {locations.map(location => (
        <LocationCard key={location.id} {...location} />
      ))}
    </div>
  );
}

export default LocationsList;