import React from 'react'
import PropTypes from 'prop-types'

const Restaurant = ({ info, displayDetails }) => {
  const { id, name, city, state, telephone, genre } = info;
  let genresDisplay = genre.join(', ')

  return (
    <tr onClick={() => displayDetails(id)} >
      <td><strong>{name}</strong></td>
      <td>{city}, {state}</td>
      <td>{telephone}</td>
      <td>{genresDisplay}</td>
    </tr>
  )
}

Restaurant.propTypes = {
  info: PropTypes.object,
  displayDetails: PropTypes.func,
  removeDetails: PropTypes.func,
}

export default Restaurant;
