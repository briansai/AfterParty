import React, {Fragment} from 'react';
import BusinessEntry from './BusinessEntry.jsx';
import PropTypes from 'prop-types';


const BusinessList = props => {
  return (
    <Fragment>
      {props.businessList.map((business, index) => (
        <BusinessEntry business={business} key={`${business.alias}_${index}`} />
      ))}
    </Fragment>
  )
}

BusinessList.propTypes = {
  businessList: PropTypes.array.isRequired
}

export default BusinessList;
