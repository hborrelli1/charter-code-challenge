import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterBar from './FilterBar';

describe('FilterBar Tests', () => {
  let restaurantData;
  let mockRender;
  let mockFilterResults;
  let mockSetSearchQuery;

  beforeEach(() => {
    restaurantData = [{
        "id": "f223fdd0-4adc-423e-9747-980a66c256ca",
        "name": "Old Hickory Steakhouse",
        "address1": "201 Waterfront St",
        "city": "Oxon Hill",
        "state": "MD",
        "zip": "20745",
        "lat": "38.782098",
        "long": "-77.017492",
        "telephone": "(301) 965-4000",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses",
        "website": "http://www.gaylordnational.com",
        "genre": ["Steak", "American", "Contemporary", "Seafood", "Cafe"],
        "hours": "Open Daily 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "00b35e1a-82b1-4988-b8b9-6df826db2818",
        "name": "Matsuhisa",
        "address1": "303 E Main St",
        "city": "Aspen",
        "state": "CO",
        "zip": "81611",
        "lat": "39.190723",
        "long": "-106.82031",
        "telephone": "(970) 544-6628",
        "tags": "Social,Food and Dining,Restaurants,Japanese,Social,Food and Dining,Restaurants,Sushi",
        "website": "http://www.matsuhisaaspen.com",
        "genre":[ "Japanese", "Sushi", "Asian", "Contemporary", "Seafood"],
        "hours": "Open Daily 5:30 PM-9:00 PM",
        "attire": "business casual"
    }];
    mockFilterResults = jest.fn();
    mockRender = render(
      <FilterBar
        restaurants={restaurantData}
        filterResults={mockFilterResults}
      />
    )
  });

  it('should render to the DOM', () => {
    const { getByText, getByPlaceholderText, queryAllByText } = mockRender
    expect(getByText('State:')).toBeInTheDocument();
    expect(queryAllByText('All')).toHaveLength(2);
    expect(getByText('Genre:')).toBeInTheDocument();
    expect(getByText('Search:')).toBeInTheDocument();
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should be able to filter by state', () => {
    const { getByText, getByPlaceholderText, getByTestId } = mockRender
    fireEvent.change(getByTestId('stateFilter'), { target: { value: 'CO' } })
    expect(mockFilterResults).toHaveBeenCalledTimes(1)
  });

  it('should be able to filter by genre', () => {
    const { getByText, getByPlaceholderText, getByTestId } = mockRender
    fireEvent.change(getByTestId('genreFilter'), { target: { value: 'Seafood' } })
    expect(mockFilterResults).toHaveBeenCalledTimes(1)
  });

  it('should be able to type into search bar', () => {
    const { getByText, getByPlaceholderText, getByTestId } = mockRender
    fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'chef' } })
    expect(mockFilterResults).toHaveBeenCalledTimes(1)
  })
})
