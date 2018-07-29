import React from 'react';
import Search from './Search.jsx';
import Logo from './Logo.jsx';
import Logout from './Logout.jsx';
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <ul>
      <li 
      // id="logo" className="nav"
      >
        <Logo />
      </li>
      <li 
      // id="search" 
      // className="nav"
      >
        <Search fetchInformation={props.fetchInformation} />
      </li>
      <li 
      // id="logout" className="nav"
      >
        <Logout handleLogout={props.handleLogout} />
      </li>
    </ul>
  )
}

Navigation.propTypes = {
  fetchInformation: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default Navigation;