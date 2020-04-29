import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer Tests', () => {
  let restaurantsData;

  beforeEach(() => {
    restaurantsData = [{
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
  })

  it('should render to the DOM', () => {
    const { getByText, debug } = render(
      <RestaurantContainer
        restaurants={restaurantsData}
        statesFilter="all"
        genreFilter="all"
        searchQuery=""
      />
    )

    expect(getByText('State:')).toBeInTheDocument();
    expect(getByText('Genre:')).toBeInTheDocument();
    expect(getByText('Search:')).toBeInTheDocument();
    expect(getByText('Restaurants')).toBeInTheDocument();
    expect(getByText('Old Hickory Steakhouse')).toBeInTheDocument();
    expect(getByText('Oxon Hill, MD')).toBeInTheDocument();
    expect(getByText('(301) 965-4000')).toBeInTheDocument();
    expect(getByText('Steak, American, Contemporary, Seafood, Cafe')).toBeInTheDocument();
    expect(getByText('Matsuhisa')).toBeInTheDocument();
    expect(getByText('Aspen, CO')).toBeInTheDocument();
    expect(getByText('(970) 544-6628')).toBeInTheDocument();
    expect(getByText('Japanese, Sushi, Asian, Contemporary, Seafood')).toBeInTheDocument();
  })
})
