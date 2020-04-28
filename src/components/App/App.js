import React, { Component } from 'react';
import RestaurantContainer from '../RestaurantContainer/RestaurantContainer';
import { apiFetchData } from '../../apiCalls/apiCalls';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      statesFilter: 'all',
      searchGenre: 'all'
    }
  }

  componentDidMount = () => {
    apiFetchData()
      .then(data => this.setState({ restaurants: data }))
  }

  filterByState = (stateValue) => {
    this.setState({ statesFilter: stateValue })
  }

  render() {
    return (
      <main>
        <header>
          <h1>Restaurant Data</h1>
        </header>
        <RestaurantContainer
          restaurants={this.state.restaurants}
          filterByState={this.filterByState}
          statesFilter={this.state.statesFilter}
        />
      </main>
    );
  }
}

export default App;
