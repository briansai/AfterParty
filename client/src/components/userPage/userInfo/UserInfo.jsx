import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = props =>{
  return(
    <div className="user-info">
      <div>
        PHOTO PLACEHOLDER
      </div>
      <div className="user-name">
        {`${props.userInfo.firstName} ${props.userInfo.lastName}`}
      </div>
      <div>
        DESCRIPTION PLACEHOLDER
      </div>
      <div>
        FRIENDS PLACEHOLDER 
      </div>
    </div>
  )
}



export default UserInfo;