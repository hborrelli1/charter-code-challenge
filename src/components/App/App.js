import React, { Component } from 'react';
import RestaurantContainer from '../RestaurantContainer/RestaurantContainer';
import { apiFetchData } from '../../apiCalls/apiCalls';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    apiFetchData()
      .then(data => this.setState({ restaurants: data }))
  }

  render() {
    return (
      <main>
        <header>
          <h1>Restaurant Data</h1>
        </header>
        <RestaurantContainer
          restaurants={this.state.restaurants}
        />
      </main>
    );
  }
}

export default App;
