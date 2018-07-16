import React from 'react';
import Navigation from './navigation/Navigation.jsx';
import BusinessList from '../business/BusinessList.jsx';
import UserInfo from './userInfo/UserInfo.jsx';
import ChatterBox from '../chatbox/Chatbox.jsx';
import PropTypes from 'prop-types';

const UserPage = (props) => {
  const list = props.businessList;

  return (
    <div>
      <div className="top-container">
        <div id="navigation">
          <Navigation
            fetchInformation={props.fetchInformation}
            handleLogout={props.handleLogout}
          />
        </div>
      </div>
      <div>
        <div className="mid-container">
          <div id="user-info">
            <UserInfo userInfo={props.userInfo} />
          </div>
          <div id="business-list">
            {list === null ? (
              <div>
              </div>
            ) : (
              <BusinessList businessList={list} />
            )}
          </div>
          <div id="chatbox">
            <ChatterBox />
          </div>
        </div>
      </div>
    </div>
  )
}


UserPage.propTypes = {
  businessList: PropTypes.array.isRequired,
  fetchInformation: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default UserPage;