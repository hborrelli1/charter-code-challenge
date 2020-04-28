import React from 'react'
import PropTypes from 'prop-types'
import './Restaurant.css'

const Restaurant = ({ info }) => {
  const { name, city, state, telephone, genre } = info;

  return (
    <div className="restaurant">
      <h3>{name}</h3>
      <p>Location: {city}, {state}</p>
      <p>Phone: <a href={`tel:${telephone}`}>{telephone}</a></p>
      <p>Genres: {genre.split(',').join(', ')}</p>
    </div>
  )
}

export default Restaurant;
