import React from 'react';
import Search from './Search.jsx';
import Logo from './Logo.jsx';
import Logout from './Logout.jsx';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <div>
      <span id="logo" className="nav">
        <Logo />
      </span>
      <span id="search" className="nav">
        <Search fetchInformation={props.fetchInformation} />
      </span>
      <span id="logout" className="nav">
        <Logout handleLogout={props.handleLogout} />
      </span>
    </div>
  )
}

Navigation.propTypes = {
  fetchInformation: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default Navigation;