import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant/Restaurant'
import './RestaurantContainer.css'

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
    <div className="restaurants-container">
      <h2>Restaurants</h2>
      <div className="restuarants-list">
        {restaurantsDisplay}
      </div>
    </div>
  )
}

export default RestaurantContainer;
