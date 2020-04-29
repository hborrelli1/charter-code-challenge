import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App/App';
import { apiFetchData } from './apiCalls';
jest.mock('./apiCalls');

describe('apiCalls Tests', () => {
  let fetchedRestaurantsData;

  beforeEach(() => {
    fetchedRestaurantsData = [
      {
        "id": "8fdbd667-8662-48b8-8749-79eeabc8353e",
        "name": "Restaurant Nicholas",
        "address1": "160 State Route 35",
        "city": "Red Bank",
        "state": "NJ",
        "zip": "07701",
        "lat": "40.36201",
        "long": "-74.08091",
        "telephone": "(732) 345-9977",
        "tags": "Social,Food and Dining,Restaurants,American,Social,Food and Dining,Restaurants,French,Social,Food and Dining,Restaurants,Seafood",
        "website": "http://www.restaurantnicholas.com",
        "genre": "American,Contemporary,Traditional,Seafood,Vegetarian",
        "hours": "Tue-Thu 5:30 PM-9:30 PM; Fri-Sat 5:30 PM-10:30 PM; Sun 5:30 PM-9:30 PM",
        "attire": "business casual"
      },
      {
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
        "genre": "Seafood",
        "hours": "Open Daily 11:00 AM-9:00 PM",
        "attire": "casual"
      }
    ]
  })

  it('should be able to fetch restaurants', () => {
    apiFetchData.mockResolvedValue(fetchedRestaurantsData)
    const { getByText,debug } = render(
      <App />
    )

    expect(apiFetchData).toHaveBeenCalledTimes(1);
  })
})
