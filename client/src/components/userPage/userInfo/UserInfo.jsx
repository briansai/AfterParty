import React from 'react';
// import PropTypes from 'prop-types';
// import UserEdit from './UserEdit.jsx';
import ModalWrapped from './EditModal.jsx';

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
      <div className="user-info">
        <div className="edit">
          <ModalWrapped handleEditClick={this.handleEditClick}/>
        </div>
        <div className="user-photo">
          PHOTO PLACEHOLDER
        </div>
        <div className="user-name">
          {`${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`}
        </div>
        <div className="user-description">
          DESCRIPTION PLACEHOLDER
        </div>
        <div className="friends-list">
          FRIENDS PLACEHOLDER 
        </div>
      </div>
    )
  }
}

export default UserInfo;