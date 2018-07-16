import React from 'react';
import PropTypes from 'prop-types';

const Logout = (props) => {
  return(
    <span className="logout" onClick={props.handleLogout}>
      <b>Logout</b>
    </span>
  )
}

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired
}

export default Logout;