import React from 'react';
import { render } from '@testing-library/react';
import Restaurant from './Restaurant';
import '@testing-library/jest-dom/extend-expect';

describe('Restaurant Tests', () => {
  let restaurantInfo;

  beforeEach(() => {
    restaurantInfo = {
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
    }
  });

  it('should render to the DOM', () => {
    const { getByText, debug } = render(
      <table>
        <tbody>
          <Restaurant info={restaurantInfo} />
        </tbody>
      </table>
    )

    expect(getByText('Old Hickory Steakhouse')).toBeInTheDocument();
    expect(getByText('Oxon Hill, MD')).toBeInTheDocument();
    expect(getByText('(301) 965-4000')).toBeInTheDocument();
    expect(getByText('Steak, American, Contemporary, Seafood, Cafe')).toBeInTheDocument();
  })
})
