import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
        "genre": ["Japanese", "Sushi", "Asian", "Contemporary", "Seafood"],
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
        "genre": ["French", "European", "Cafe", "Continental", "American"],
        "hours": "Mon-Thu 5:30 PM-9:00 PM; Fri-Sat 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0b4bfe46-3e60-4de4-82ba-2dd8e5d46b56",
        "name": "The Capital Grille",
        "address1": "500 Crescent Ct",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "lat": "32.794749",
        "long": "-96.804099",
        "telephone": "(214) 303-0500",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.thecapitalgrille.com",
        "genre": ["Steak", "American"],
        "hours": "Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-9:00 PM",
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
        "genre": ["Seafood", "International", "American", "Oysters", "Cafe"],
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
        "genre": ["American", "Contemporary"],
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
        "genre": ["Steak", "American"],
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
        "genre": ["Steak", "American", "Seafood", "International", "Traditional"],
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
        "genre": ["Hawaiian", "Polynesian", "Pacific Rim", "Cafe", "Vietnamese"],
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
        "genre": ["Cafe", "Italian", "Bistro", "Contemporary", "Vegetarian"],
        "hours": "Tue 4:00 PM-9:00 PM; Wed-Sat 5:00 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "3e394ac5-f9da-4923-ac83-a9c59fe3b195",
        "name": "La Mer",
        "address1": "2199 Kalia Rd",
        "city": "Honolulu",
        "state": "HI",
        "zip": "96815",
        "lat": "21.277744",
        "long": "-157.832012",
        "telephone": "(808) 923-2311",
        "tags": "Social,Food and Dining,Restaurants,French,Social,Food and Dining,Restaurants,Seafood",
        "website": "http://www.halekulani.com/dining/la_mer/",
        "genre": ["French", "Hawaiian", "Seafood", "European", "Vegetarian"],
        "hours": "Open Daily 5:30 PM-9:30 PM",
        "attire": "formal"
    }];
  })

  it('should render to the DOM', () => {
    const { getByText, debug } = render(
      <RestaurantContainer
      restaurants={restaurantsData}
      statesFilter="all"
      genreFilter="all"
      searchQuery=""
      currentPage={1}
      quantityPerPage={10}
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

  it('should be able to change pages', () => {
    const mockChangePage = jest.fn();
    const { getByText, debug } = render(
      <RestaurantContainer
      restaurants={restaurantsData}
      statesFilter="all"
      genreFilter="all"
      searchQuery=""
      currentPage={1}
      quantityPerPage={10}
      selectPage={mockChangePage}
      changePage={mockChangePage}
      />
    )

    fireEvent.click(getByText('next'));
    expect(mockChangePage).toHaveBeenCalledTimes(1);
    expect(getByText('La Mer')).toBeInTheDocument();
  })
})
