import React from 'react';
import PropTypes from 'prop-types';
import GreenButton from '../../materialUI/GreenButton.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      email: this.state.email,
      password: this.state.password
    }
    
    this.props.fetchInformation('userInfo', information);
    event.preventDefault();
  }

  render() {
    return (
      <div className="home-page">
        <form>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputValues} className="home-page-input"/>
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleInputValues} className="home-page-input"/>
          </label>
        </form>
        <div className="button">
          <GreenButton buttonText="Login" handleSubmit={this.handleSubmit}/>
        </div>
        <div className="login-message">
          {this.props.loginMessage}
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  fetchInformation: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired
}

export default Login;