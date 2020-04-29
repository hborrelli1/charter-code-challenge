import React from 'react'
import PropTypes from 'prop-types'
import closeButton from '../../svgs/close-button.svg';
import './RestaurantDetails.css';

const RestaurantDetails = ({ restaurantInfo, removeDetails }) => {
  let modalContent;
  const {
    id,
    name,
    address1,
    city,
    state,
    zip,
    telephone,
    website,
    genre,
    hours,
    attire,
    tags
  } = restaurantInfo;

  if (restaurantInfo.id) {
    modalContent = (
      <div className="contents">
        <div className="header">
          <h2>{name}</h2>
          <p><strong>Genre:</strong> {genre.join(', ')}</p>
          <p><strong>Attire:</strong> {attire}</p>
        </div>
        <div className="body">
          <h3>Hours of Operation:</h3>
          <p>{hours.split('; ').join(' | ')}</p>
          <h3>Address:</h3>
          <address>
          {address1}<br/>
          {city}, {state} | {zip}<br/>
          </address>
          <h3>Contact:</h3>
          <p><strong>Telephone:</strong> {telephone}</p>
          <p><strong>Webiste:</strong> <a href={website} target="_blank">{website}</a></p>
          <p className="tags">{tags.split(',').join(', ')}</p>
        </div>
      </div>
    )
  } else {
    modalContent = '';
  }

  return (
    <div className="restaurant-modal">
      <button
        className="closeButton"
        onClick={removeDetails}
      >
        <img src={closeButton} alt="close button" />
      </button>
      {modalContent}
    </div>
  )
}

export default RestaurantDetails;
