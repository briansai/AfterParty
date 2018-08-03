import React from 'react';
import PropTypes from 'prop-types';
import GreenButton from '../../materialUI/GreenButton.jsx';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      handle: '',
      email: '',
      password: '',  
    }

    this.handleInputValues = this.handleInputValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputValues(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const information = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      handle: this.state.handle,
      email: this.state.email,
      password: this.state.password,
    }

    this.props.handleSignUp(information);
    event.preventDefault();
  }

  render() {
    return (
      <div className="home-page">
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputValues}
              className="home-page-input"
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputValues}
              className="home-page-input"
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="handle"
              value={this.state.handle}
              onChange={this.handleInputValues}
              className="home-page-input"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputValues}
              className="home-page-input"
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputValues}
              className="home-page-input"
            />
          </label>
        </form>
        <div className="button">
          <GreenButton
            buttonText="Save"
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div>
          {this.props.signUpMessage}
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUpMessage: PropTypes.string.isRequired
}

export default SignUp;