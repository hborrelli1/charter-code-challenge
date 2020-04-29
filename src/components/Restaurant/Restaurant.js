import React from 'react'
import PropTypes from 'prop-types'
import './Restaurant.css'

const Restaurant = ({ info }) => {
  const { name, city, state, telephone, genre } = info;
  let genres = genre.join(', ')

  return (
    <tr>
      <td>{name}</td>
      <td>{city}, {state}</td>
      <td>{telephone}</td>
      <td>{genres}</td>
    </tr>
  )
}

export default Restaurant;
