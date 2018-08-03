import React from 'react';
import BusinessEntry from './BusinessEntry.jsx';
import PropTypes from 'prop-types';


const BusinessList = props => {
  return (
    <span className="mid-components">
        {props.businessList.map((business, index) => (
          <BusinessEntry business={business} key={`${business.alias}_${index}`} />
        ))}
    </span>
  )
}

BusinessList.propTypes = {
  businessList: PropTypes.array.isRequired
}

export default BusinessList;
