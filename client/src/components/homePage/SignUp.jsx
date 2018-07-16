import React from 'react';
import PropTypes from 'prop-types';



class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',  
    }

    this.handleInputValues = this.handleInputValues.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInputValues(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSave() {
    const information = {
      firstName: this.state.firstName,
      lastName: this.state.firstName,
      email: this.state.email,
      password: this.state.password
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
          </label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputValues}/>
          <label>
            Last Name:
          </label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputValues}/>
          <label>
            Email:
          </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleInputValues}/>
          <label>
            password:
          </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputValues}/>
        </form>
        <button onClick={this.handleSave}>
          Save
        </button>
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