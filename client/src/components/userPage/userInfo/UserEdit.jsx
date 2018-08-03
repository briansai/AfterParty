import React, { Fragment } from 'react';
import GreenButton from '../../../materialUI/GreenButton.jsx';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      avatar: '',
      description: '',
    }
  
    this.handleEditInput = this.handleEditInput.bind(this);
  }

  handleEditInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState = {
      [name]: value,
    }
  }

  render() {
    const userInfo = this.props.userInfo;

    return (
      <Fragment>
        <form>
          <label>
            First Name: 
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={this.handleEditInput}
            />
          </label>
          <label>
            Last Name: 
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={this.handleEditInput}
            />
          </label>
          <label>
            Avatar: 
            <input
              type="text"
              name="avatar"
              value={userInfo.avatar}
              onChange={this.handleEditInput}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={userInfo.description}
              onChange={this.handleEditInput}
            />
          </label>
        </form>
        <GreenButton
          variant="contained"
          color="primary"

        />
      </Fragment>
    )
  }
}

export default UserEdit;
