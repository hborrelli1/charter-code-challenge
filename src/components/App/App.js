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
      genreFilter: 'all',
      searchQuery: '',
      statesFilterEnabled: 'checked',
      genreFilterEnabled: 'checked',
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

  setSearchQuery = (searchTerm) => {
    this.setState({ searchQuery: searchTerm });
  }

  setFiltersDisplay = (target) => {
    if (this.state[target.name] === 'checked') {
      this.setState({ [target.name]: ' ' })
    } else {
      this.setState({ [target.name]: 'checked' })
    }
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
          searchQuery={this.state.searchQuery}
          setSearchQuery={this.setSearchQuery}
          setFiltersDisplay={this.setFiltersDisplay}
          statesFilterEnabled={this.state.statesFilterEnabled}
          genreFilterEnabled={this.state.genreFilterEnabled}
        />
      </main>
    );
  }
}

export default App;
