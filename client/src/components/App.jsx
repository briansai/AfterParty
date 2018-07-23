import React, {Fragment} from 'react';
import axios from 'axios';
import HomePage from './homePage/HomePage.jsx';
import UserPage from './userPage/UserPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      businessList: null,
      login: false,
      loginMessage: '',
      signUpMessage: '',
      userInfo: [],
    }

    this.fetchInformation = this.fetchInformation.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.fetchInformation('getBusinessList', {location: 'San Francisco'})
  }

  fetchInformation(url, information) {
    axios.get(`/${url}`, {
      params: information
    })
    .then((response) => {
      if (url === 'getBusinessList') {
        this.setState({
          businessList: JSON.parse(response.data.body).businesses,
        })
      } else if (url === 'userInfo') {
        this.setState({
          login: true,
          userInfo: response.data[0]
        })
      }
    })
    .catch((error) => {
      if (url === 'userInfo') {
        this.setState({
          loginMessage: 'The email/password you provided was incorrect.  Please try again.',
        })
      } else {
        console.log(error);
      }
    })
  }

  handleSignUp(information) {
    axios.post('/saveLogin', {
      params: information
    })
    .then((response) => {
      if (response) {
        this.setState({
          login: true
        })
      }
    })
    .catch((error) => {
      if (error.code === 11000) {
        this.setState({
          signUpMessage: 'The email you provided is already in use.  Please try another one.',
        })
      }

      this.setState({
        signUpMessage: 'Something went wrong.  We apologize for the inconvenience',
      })
    })
  }

  handleLogout() {
    this.setState({
      login: false
    })
  }

  render() {
    return (
      <Fragment>
        {!this.state.login ? (
          <HomePage
            fetchInformation={this.fetchInformation}
            handleSignUp={this.handleSignUp}
            loginMessage={this.state.loginMessage}
            signUpMessage={this.state.signUpMessage}
          />
        ) : (
          <UserPage
            businessList={this.state.businessList}
            userInfo={this.state.userInfo}
            fetchInformation={this.fetchInformation}
            handleLogout={this.handleLogout}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
