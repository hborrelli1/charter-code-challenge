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
      genreFilter: 'all'
    }
  }

  componentDidMount = () => {
    apiFetchData()
      .then(data => {
         let updatedData = data.map(rest => {
           rest.genre = rest.genre.split(',')
           return rest;
         })
         return updatedData;
      })
      .then(updatedData => this.setState({ restaurants: updatedData }))
  }

  filterResults = (target) => {
    console.log(target.name);
    this.setState({ [target.name]: target.value })
  }

  render() {
    return (
      <main>
        <header>
          <h1>Restaurant Data</h1>
        </header>
        <RestaurantContainer
          restaurants={this.state.restaurants}
          filterResults={this.filterResults}
          statesFilter={this.state.statesFilter}
          genreFilter={this.state.genreFilter}
        />
      </main>
    );
  }
}

export default App;
