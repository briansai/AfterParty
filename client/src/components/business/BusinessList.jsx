import React from 'react';
import BusinessEntry from './BusinessEntry.jsx';
import PropTypes from 'prop-types';


const BusinessList = props => {
  return (
    <div>
      {props.businessList.map((business, index) => (
        <BusinessEntry business={business} key={`${business.alias}_${index}`} />
      ))}
    </div>
  )
}

BusinessList.propTypes = {
  businessList: PropTypes.array.isRequired
}

export default BusinessList;
