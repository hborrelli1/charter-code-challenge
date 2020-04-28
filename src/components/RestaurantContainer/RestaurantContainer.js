import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant/Restaurant'

const RestaurantContainer = ({ restaurants }) => {
  let restaurantsDisplay;
  let restaurantsSorted = restaurants.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return (nameA < nameB) ? - 1 : (nameA > nameB) ? 1 : 0;
  });

  restaurants.length
    ? restaurantsDisplay = restaurantsSorted.map(restInfo => <Restaurant key={restInfo.id} info={restInfo} />)
    : restaurantsDisplay = <p>No resturants to display.</p>;

  return (
    <div>
      <h2>Restaurants</h2>
      {restaurantsDisplay}
    </div>
  )
}

export default RestaurantContainer;
