import React from 'react';
import PropTypes from 'prop-types';

const BusinessEntry = (props) => {
  return (
    <div className="business-entry">
      <span className="business-img" className="clearfix">
        <img src={props.business.image_url} width="150" height="150"/>
      </span>
      <span className="business-name" className="inline">
        {props.business.name}
      </span>
      <span className="business-price" className="inline">
        {props.business.price}
      </span>
    </div>
  )
}

BusinessEntry.propTypes = {
  business: PropTypes.object.isRequired
}

export default BusinessEntry;