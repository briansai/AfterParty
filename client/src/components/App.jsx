import React from 'react';
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

    this.getBusinessList = this.getBusinessList.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getBusinessList('San Francisco')
  }

  getBusinessList(businessSearch) {
    axios.get('/getBusinessList', {
      params: {
        param: businessSearch
      },
    })
    .then((response) => {
      this.setState({
        businessList: JSON.parse(response.data.body).businesses,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleLogin(information) {
    axios.get('/loginInfo', {
      params: information
    })
    .then((response) => {
      if (response) {
        this.setState({
          login: true,
          userInfo: response.data[0]
        })
      }
    })
    .catch((error) => {
      this.setState({
        loginMessage: 'The email/password you provided was incorrect.  Please try again.',
      })
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

  handleSearch(query) {
    this.getBusinessList(query);
  }

  render() {
    return (
      <div>
        {!this.state.login ? (
          <HomePage
            handleLogin={this.handleLogin}
            handleSignUp={this.handleSignUp}
            loginMessage={this.state.loginMessage}
            signUpMessage={this.state.signUpMessage}
          />
        ) : (
          <UserPage
            businessList={this.state.businessList}
            userInfo={this.state.userInfo}
            handleSearch={this.handleSearch}
            handleLogout={this.handleLogout}
          />
        )}
      </div>
    );
  }
}

export default App;
