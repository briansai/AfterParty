import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import UserEditModal from './UserEditModal.jsx';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      edit: false,
    }

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({
      edit: true,
    })
  }

  render() {
    return (
      <span className="mid-components">
        <div className="user-edit-modal">
          <UserEditModal handleEditClick={this.handleEditClick} userInfo={this.props.userInfo}/>
        </div>
        <div className="user-photo" className="user-component">
          {this.props.userInfo.avatar === undefined ? (
            <img src="https://i.gifer.com/A4wD.gif" width="150" height="150" alt="Your Default"/>
          ) : (
            <img src={this.props.userInfo.avatar} width="150" height="150" alt="Your Picture"/>
          )} 
        </div>
        <div className="user-name" className="user-component">
          <b>{`${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`}</b>
        </div>
        <div className="user-description" className="user-component">
          {this.props.userInfo.description}
        </div>
        <div className="friends-list" className="user-component">
          FRIENDS PLACEHOLDER 
        </div>
      </span>
    )
  }
}

export default UserInfo;