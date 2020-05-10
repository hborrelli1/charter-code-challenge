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
    },
    {
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
        "genre": "Steak,American,Contemporary,Seafood,Cafe",
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
        "genre": "Japanese,Sushi,Asian,Contemporary,Seafood",
        "hours": "Open Daily 5:30 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0f41a3d0-0641-4eef-b7fd-706f083cf0d5",
        "name": "Fleurie Restaurant",
        "address1": "108 3rd St NE",
        "city": "Charlottesville",
        "state": "VA",
        "zip": "22902",
        "lat": "38.030526",
        "long": "-78.479785",
        "telephone": "(434) 971-7800",
        "tags": "Social,Food and Dining,Restaurants,French",
        "website": "http://www.fleurierestaurant.com",
        "genre": "French,European,Cafe,Continental,American",
        "hours": "Mon-Thu 5:30 PM-9:00 PM; Fri-Sat 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "cd273a24-f8de-44f6-8add-028e22229293",
        "name": "Boston Lobster Feast",
        "address1": "8731 International Dr",
        "city": "Orlando",
        "state": "FL",
        "zip": "32819",
        "lat": "28.43897",
        "long": "-81.470707",
        "telephone": "(407) 248-8606",
        "tags": "Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,American",
        "website": "http://www.bostonlobsterfeast.com",
        "genre": "Seafood,International,American,Oysters,Cafe",
        "hours": "Mon-Fri 4:00 PM-10:00 PM; Sat-Sun 2:00 PM-10:00 PM",
        "attire": "Casual"
    },
    {
        "id": "9ebb46cd-d4db-4a31-b3a9-dfe41b6c329f",
        "name": "Earth",
        "address1": "354 Goose Rocks Rd",
        "city": "Kennebunkport",
        "state": "ME",
        "zip": "04046",
        "lat": "43.413001",
        "long": "-70.428904",
        "telephone": "(207) 967-6550",
        "tags": "Social,Food and Dining,Restaurants,American,Social,Bars",
        "website": "http://www.earthathiddenpond.com",
        "genre": "American,Contemporary",
        "hours": "Open Daily 5:30 PM-9:30 PM",
        "attire": "Casual"
    },
    {
        "id": "71764c4a-52fc-4565-8f5a-19fed53ef049",
        "name": "The Capital Grille",
        "address1": "16489 N Scottsdale Rd",
        "city": "Scottsdale",
        "state": "AZ",
        "zip": "85254",
        "lat": "33.637215",
        "long": "-111.924262",
        "telephone": "(480) 348-1700",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.thecapitalgrille.com",
        "genre": "Steak,American",
        "hours": "Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0491b590-5bc4-4899-957a-4659d01b1049",
        "name": "Angelo's 677 Prime",
        "address1": "677 Broadway",
        "city": "Albany",
        "state": "NY",
        "zip": "12207",
        "lat": "42.653271",
        "long": "-73.748583",
        "telephone": "(518) 427-7463",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,American",
        "website": "http://www.677prime.com",
        "genre": "Steak,American,Seafood,International,Traditional",
        "hours": "Mon-Fri 11:30 AM-10:00 PM; Sat 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "673d4ab1-8850-4a69-9a25-36a98f584ce6",
        "name": "Feast at Lele",
        "address1": "505 Front St",
        "city": "Lahaina",
        "state": "HI",
        "zip": "96761",
        "lat": "20.867754",
        "long": "-156.675512",
        "telephone": "(808) 667-5353",
        "tags": "Social,Food and Dining,Restaurants,International",
        "website": "http://www.feastatlele.com",
        "genre": "Hawaiian,Polynesian,Pacific Rim,Cafe,Vietnamese",
        "hours": "Open Daily 5:30 PM-8:30 PM",
        "attire": "business casual"
    },
    {
        "id": "8a936f27-bcf4-485b-9522-219451bc8cec",
        "name": "Cafe Cimino Country Inn",
        "address1": "616 Main St",
        "city": "Sutton",
        "state": "WV",
        "zip": "26601",
        "lat": "38.663967",
        "long": "-80.704248",
        "telephone": "(304) 765-2913",
        "tags": "Social,Food and Dining,Restaurants,Italian,Social,Food and Dining,Cafes,Coffee and Tea Houses",
        "website": "http://www.cafeciminocountryinn.com",
        "genre": "Cafe,Italian,Bistro,Contemporary,Vegetarian",
        "hours": "Tue 4:00 PM-9:00 PM; Wed-Sat 5:00 PM-9:00 PM",
        "attire": "business casual"
    }];
  })

  afterEach(() => {
    cleanup;
  })

  describe('App Unit Tests', () => {
    it('should render to the DOM', () => {
      apiFetchData.mockResolvedValue([]);
      const { getByText } = render(
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
      const { getByText } = render(
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
      const { getByText, getByTestId, queryByText } = render(
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
      const { getByText, getByTestId, queryByText } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.change(getByTestId('genreFilter'), { target: { value: 'Vegetarian' } })
      expect(queryByText('Mama\'s Fish House')).toBeNull()
    });

    it('should be able to filter results by search query', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, queryByText } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'fish' } })
      expect(queryByText('Restaurant Nicholas')).toBeNull()
    });

    it('should be able to display restaurant details by clicking', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, queryByText } = render(
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
      const { getByText, getByPlaceholderText, getByTestId, queryByText } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      fireEvent.click(getByText("Mama's Fish House"))
      expect(getByText('Hours of Operation:')).toBeInTheDocument();
      expect(getByText('Open Daily 11:00 AM-9:00 PM')).toBeInTheDocument()
      fireEvent.click(getByTestId('close-button'));
      expect(queryByText('Hours of Operation:')).toBeNull()
    });

    it('should be able to change results page.', async () => {
      jest.clearAllMocks();
      apiFetchData.mockResolvedValue(mockFetchedRestaurantData);
      const { getByText, getByPlaceholderText, getByTestId, queryByText } = render(
        <App />
      )

      await waitForElement(() => getByText('Restaurant Nicholas'))
      expect(getByText('prev')).toBeInTheDocument();
      expect(getByText('next')).toBeInTheDocument();
      expect(getByText('1')).toBeInTheDocument();
      expect(getByText('2')).toBeInTheDocument();

      fireEvent.click(getByText('next'));
      expect(getByText('The Capital Grille')).toBeInTheDocument();
    })
  })
})
