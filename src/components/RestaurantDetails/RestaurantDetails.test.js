import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestaurantDetails from './RestaurantDetails';

describe('RestuarantDetails Tests', () => {
  let restaurantData;

  beforeEach(() => {
    restaurantData = {
      "id": "509f8ddf-c999-44ba-967e-406585895bbb",
      "name": "Mama's Fish House",
      "address1": "799 Poho Pl",
      "city": "Paia",
      "state": "HI",
      "zip": "96779",
      "lat": "20.929148",
      "long": "-156.366996",
      "telephone": "(808) 579-8488",
      "tags": "Social,Food and Dining,Restaurants",
      "website": "http://www.mamasfishhouse.com",
      "genre": ["Seafood"],
      "hours": "Open Daily 11:00 AM-9:00 PM",
      "attire": "casual"
    }
  })

  it('should render to the DOM', () => {
    const { getByText, debug } = render(
      <RestaurantDetails
        restaurantInfo={restaurantData}
      />
    )

    expect(getByText("Mama's Fish House")).toBeInTheDocument();
    expect(getByText("Seafood")).toBeInTheDocument();
    expect(getByText("(808) 579-8488")).toBeInTheDocument();
    expect(getByText("http://www.mamasfishhouse.com")).toBeInTheDocument();
    expect(getByText("Social, Food and Dining, Restaurants")).toBeInTheDocument();
  });

  it('should be able to close modal', () => {
    const mockRemoveDetails = jest.fn();
    const { getByText, getByTestId, debug } = render(
      <RestaurantDetails
        restaurantInfo={restaurantData}
        removeDetails={mockRemoveDetails}
      />
    )

    expect(getByText("Mama's Fish House")).toBeInTheDocument();
    fireEvent.click(getByTestId('close-button'));
    expect(mockRemoveDetails).toBeCalledTimes(1);
  })
})
