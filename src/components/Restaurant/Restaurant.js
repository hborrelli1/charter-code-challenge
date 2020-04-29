import React from 'react'
import PropTypes from 'prop-types'
import './Restaurant.css'

const Restaurant = ({ info, displayDetails }) => {
  const { id, name, city, state, telephone, genre } = info;
  let genresDisplay = genre.join(', ')

  return (
    <tr
      onClick={() => displayDetails(id)}
    >
      <td><strong>{name}</strong></td>
      <td>{city}, {state}</td>
      <td>{telephone}</td>
      <td>{genresDisplay}</td>
    </tr>
  )
}

export default Restaurant;
