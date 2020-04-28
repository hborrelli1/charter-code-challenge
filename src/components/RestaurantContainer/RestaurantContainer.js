import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant/Restaurant'
import FilterBar from '../FilterBar/FilterBar'
import './RestaurantContainer.css'

const RestaurantContainer = ({ restaurants, filterResults, statesFilter, genreFilter }) => {
  let restaurantsDisplay;
  let results = restaurants;

  if (statesFilter !== 'all') {
    results = results.filter(restaurant => restaurant.state === statesFilter);
  }

  if (genreFilter !== 'all') {
    results = results.filter(restaurant => restaurant.genre.includes(genreFilter))
  }

  let restaurantsSorted = results.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return (nameA < nameB) ? - 1 : (nameA > nameB) ? 1 : 0;
  });

  results.length
    ? restaurantsDisplay = restaurantsSorted.map(restInfo => <Restaurant key={restInfo.id} info={restInfo} />)
    : restaurantsDisplay = <p>No resturants to display.</p>;

  return (
    <div className="restaurants-container">
      <FilterBar
        restaurants={restaurants}
        filterResults={filterResults}
      />
      <div className="restuarants-list">
        {restaurantsDisplay}
      </div>
    </div>
  )
}

export default RestaurantContainer;
