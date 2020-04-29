import React from 'react';
import { render, waitForElement, waitForElementToBeRemoved, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import { apiFetchData } from '../../apiCalls/apiCalls';
jest.mock('../../apiCalls/apiCalls')

describe('App Test', () => {
  let mockFetchedRestaurantData;

  beforeEach(() => {
    mockFetchedRestaurantData = [{
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
    }];
  })

  afterEach(() => {
    cleanup;
  })

  describe('App Unit Tests', () => {
    it('should render to the DOM', () => {
      apiFetchData.mockResolvedValue([]);
      const { getByText, debug } = render(
        <App />
      )

      expect(getByText('Restaurant Data')).toBeInTheDocument();
      expect(getByText('State:')).toBeInTheDocument();
      expect(getByText('Genre:')).toBeInTheDocument();
      expect(getByText('Search:')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
      expect(getByText('No resturants to display.')).toBeInTheDocument();
    });

    it('should load content after mounting', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, debug } = render(
        <App />
      )

      expect(getByText('No resturants to display.'))
      await waitForElement(() => getByText('Restaurant Nicholas'))
      expect(apiFetchData).toHaveBeenCalledTimes(1)
    })
  });

  describe('App Integration Test', () => {
    it('should be able to filter results by state', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByTestId, queryByText, debug } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      expect(getByText("Restaurant Nicholas")).toBeInTheDocument();
      expect(getByText("Mama's Fish House")).toBeInTheDocument();
      fireEvent.change(getByTestId('stateFilter'), { target: { value: 'HI' } })
      expect(queryByText('Restaurant Nicholas')).toBeNull()
    });

    it('should be able to filter results by genre', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByTestId, queryByText, debug } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.change(getByTestId('genreFilter'), { target: { value: 'Vegetarian' } })
      expect(queryByText('Mama\'s Fish House')).toBeNull()
    });

    it('should be able to filter results by search query', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, queryByText, debug } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'fish' } })
      expect(queryByText('Restaurant Nicholas')).toBeNull()
    });

    it('should be able to display restaurant details by clicking', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, queryByText, debug } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.click(getByText("Mama's Fish House"))
      expect(getByText('Hours of Operation:')).toBeInTheDocument();
      expect(getByText('Open Daily 11:00 AM-9:00 PM')).toBeInTheDocument();
      expect(getByText('http://www.mamasfishhouse.com')).toBeInTheDocument();
      expect(getByText('Social, Food and Dining, Restaurants')).toBeInTheDocument();
    });

    it('should be able to close popup modal', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, getByTestId, queryByText, debug } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.click(getByText("Mama's Fish House"))
      expect(getByText('Hours of Operation:')).toBeInTheDocument();
      expect(getByText('Open Daily 11:00 AM-9:00 PM')).toBeInTheDocument()
      fireEvent.click(getByTestId('close-button'));
      expect(queryByText('Hours of Operation:')).toBeNull()
    })
  })
})
