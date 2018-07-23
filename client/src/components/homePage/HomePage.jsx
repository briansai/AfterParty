import React, { Fragment } from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import PropTypes from 'prop-types';


const HomePage = props => {
  return (
    <Fragment>
      {/* <h2 className="home-page-title">
        DM 
      </h2> */}
      <div className="home-page-container">
        <span className="home-page-component" className="sign-up">
          <SignUp handleSignUp={props.handleSignUp} signUpMessage={props.signUpMessage} />
        </span>
        <span className="home-page-component" className="login">
          <Login fetchInformation={props.fetchInformation} loginMessage={props.loginMessage} />
        </span>
      </div>
    </Fragment>
  )
}

HomePage.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUpMessage: PropTypes.string.isRequired,
  fetchInformation: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired
}

export default HomePage;