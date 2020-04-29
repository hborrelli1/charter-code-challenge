import React, { Component } from 'react';
import RestaurantContainer from '../RestaurantContainer/RestaurantContainer';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';
import { apiFetchData } from '../../apiCalls/apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      statesFilter: 'all',
      genreFilter: 'all',
      searchQuery: '',
      showDetails: ''
    }
  }

  componentDidMount = () => {
    apiFetchData()
      .then(data => {
        // Cleaning genre data
        let updatedData = data.map(rest => {
          rest.genre = rest.genre.split(',')
          return rest;
        })
        return updatedData;
      })
      .then(updatedData => this.setState({ restaurants: updatedData }))
  }

  filterResults = (target) => {
    this.setState({ [target.name]: target.value })
  }

  displayDetails = (id) => {
    this.setState({ showDetails: id });
  }

  removeDetails = () => {
    this.setState({ showDetails: '' });
  }

  render() {
    const { showDetails, restaurants } = this.state;
    const restaurantDetailsClass = showDetails ? 'js-details-open' : '';
    const restaurantDetailsInfo = showDetails ? restaurants.find(rest => rest.id === showDetails) : {};
    const bodyClass = showDetails ? 'noscroll' : ''

    return (
      <main className={bodyClass}>
        <header>
          <h1>Restaurant Data</h1>
        </header>
        <RestaurantContainer
          restaurants={this.state.restaurants}
          filterResults={this.filterResults}
          statesFilter={this.state.statesFilter}
          genreFilter={this.state.genreFilter}
          searchQuery={this.state.searchQuery}
          displayDetails={this.displayDetails}
        />
        <div className={"restaurant-details " + restaurantDetailsClass}>
          <RestaurantDetails
            restaurantInfo={restaurantDetailsInfo}
            removeDetails={this.removeDetails}
          />
        </div>
      </main>
    );
  }
}

export default App;
