import React from 'react';
import PropTypes from 'prop-types';


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
    
    this.props.handleLogin(information);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="home-page">
          <label>
            Email:
          </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleInputValues}/>
          <label>
            password:
          </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputValues}/>
        </form>
        <button onClick={this.handleSubmit}>
          Login
        </button>
        <div className="login-message">
          {this.props.loginMessage}
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired
}

export default Login;