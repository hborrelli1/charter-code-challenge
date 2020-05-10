import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant/Restaurant'
import FilterBar from '../FilterBar/FilterBar'
import './RestaurantContainer.css'

const RestaurantContainer = ({
    restaurants,
    filterResults,
    statesFilter,
    genreFilter,
    searchQuery,
    displayDetails,
    removeDetails
  }) => {
  let restaurantsDisplay;
  let searchRegex;
  let results = restaurants;

  if (statesFilter !== 'all') {
    results = results.filter(restaurant => restaurant.state === statesFilter);
  }

  if (genreFilter !== 'all') {
    results = results.filter(restaurant => restaurant.genre.includes(genreFilter))
  }

  if (searchQuery !== '') {
    searchRegex = new RegExp(searchQuery, 'i');
    results = results.filter(restaurant => {
      return (restaurant.name.match(searchRegex)
              || restaurant.state.match(searchRegex)
              || restaurant.city.match(searchRegex)
              || restaurant.genre.includes(searchRegex)
            );
    })
  }

  let restaurantsSorted = results.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return (nameA < nameB) ? - 1 : (nameA > nameB) ? 1 : 0;
  });

  // Instead of array of results, break results into array 10 results each\
  // current page starts at 1
  const [currentPage, setPage] = useState(0);
  let quantity = 10;

  let paginatedResults = [];
  let group;

  while (restaurantsSorted.length > 0) {
    group = restaurantsSorted.splice(0, 10);
    paginatedResults.push(group);
  }

  console.log(paginatedResults);
  console.log(paginatedResults[0]);
  let pageButtons = paginatedResults.map((page, index) => (<button key={index}>{index}</button>));

  // console.log(restaurantsSorted);
  paginatedResults.length
    ? restaurantsDisplay = paginatedResults[currentPage].map(restInfo => (
        <Restaurant
          key={restInfo.id}
          info={restInfo}
          displayDetails={displayDetails}
          removeDetails={removeDetails}
        />
      ))
    : restaurantsDisplay = <tr><td colSpan="4" className="no-results">No resturants to display.</td></tr>;

  return (
    <div className="restaurants-container">
      <FilterBar
        restaurants={restaurants}
        filterResults={filterResults}
      />
      <div className="restaurants-list">
        <h2>Restaurants</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th className="phone">Telephone</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {restaurantsDisplay}
          </tbody>
        </table>
        <div className="pagination-control">
          <button onClick={() => setPage(currentPage + 1)}>L</button>
          {pageButtons}
          <button onClick={() => setPage(currentPage - 1)}>R</button>
        </div>
      </div>
    </div>
  )
}

RestaurantContainer.propTypes = {
  restaurants: PropTypes.array,
  filterResults: PropTypes.func,
  statesFilter: PropTypes.string,
  genreFilter: PropTypes.string,
  searchQuery: PropTypes.string,
  displayDetails: PropTypes.func
}

export default RestaurantContainer;
