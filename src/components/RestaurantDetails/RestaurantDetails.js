import React from 'react'
import PropTypes from 'prop-types'
import closeButton from '../../svgs/close-button.svg';
import './RestaurantDetails.css';

const RestaurantDetails = ({ restaurantInfo, removeDetails }) => {
  let modalContent;
  const {
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
          <p>
            <strong>Telephone:</strong>
            <a href={"tel:" + telephone}>{telephone}</a>
          </p>
          <p>
            <strong>Webiste:</strong>
            <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
          </p>
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
        data-testid="close-button"
        onClick={removeDetails}
      >
        <img src={closeButton} alt="close button" />
      </button>
      {modalContent}
    </div>
  )
}

RestaurantDetails.propTypes = {
  restaurantInfo: PropTypes.object,
  removeDetails: PropTypes.func
}

export default RestaurantDetails;
