import React from 'react'
import PropTypes from 'prop-types'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statesFilter: 'all',
      genreFilter: 'all'
    }
  }

  handleChange = (event) => {
    const { filterResults } = this.props;
    this.setState({ [event.target.name]: event.target.value })
    filterResults(event.target)
  }

  render () {
    const { restaurants } = this.props;
    let states = restaurants.reduce((states, restaurant) => {
      if (!states.includes(restaurant.state)) {
        states.push(restaurant.state);
      }

      return states;
    },[]).sort();

    let genres = restaurants.reduce((genres, restaurant) => {
      restaurant.genre.forEach(genre => {
        if (!genres.includes(genre)) {
          genres.push(genre);
        }
      })

      return genres;
    },[]).sort();

    let stateOptions = states.map(state => <option key={states.indexOf(state)} value={`${state}`}>{state}</option>);
    let genreOptions = genres.map(genre => <option key={genres.indexOf(genre)} value={`${genre}`}>{genre}</option>);

    return (
      <div className="filter-bar">
        <form>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="statesFilter"
              value={this.state.statesFilter}
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              {stateOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <select
              id="genre"
              name="genreFilter"
              value={this.state.genreFilter}
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              {genreOptions}
            </select>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBar;
