import React from 'react'
import PropTypes from 'prop-types'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateFilter: 'all',
      genreFilter: 'all'
    }
  }

  handleChange = (event) => {
    const { filterByState } = this.props;
    this.setState({ [event.target.name]: event.target.value })
    filterByState(event.target.value)
  }

  render () {
    const { restaurants } = this.props;
    let states = restaurants.reduce((states, restaurant) => {
      if (!states.includes(restaurant.state)) {
        states.push(restaurant.state);
      }

      return states;
    },[]).sort();

    let stateOptions = states.map(state => <option key={states.indexOf(state)} value={`${state}`}>{state}</option>);

    return (
      <div className="filter-bar">
        <form>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="stateFilter"
              value={this.state.stateFilter}
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              {stateOptions}
            </select>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBar;
