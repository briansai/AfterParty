import React from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import PropTypes from 'prop-types';


const HomePage = props => {
  return (
    <div className="home-page-container">
      <span className="home-page-component">
        <SignUp handleSignUp={props.handleSignUp} signUpMessage={props.signUpMessage} />
      </span>
      <span className="home-page-component">
        <Login handleLogin={props.handleLogin} loginMessage={props.loginMessage} />
      </span>
    </div>
  )
}

HomePage.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUpMessage: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired
}

export default HomePage;