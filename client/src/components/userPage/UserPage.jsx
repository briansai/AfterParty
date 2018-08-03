import React, { Fragment } from 'react';
import Navigation from './navigation/Navigation.jsx';
import BusinessList from './business/BusinessList.jsx';
import UserInfo from './userInfo/UserInfo.jsx';
import ChatterBox from './chatbox/ChatterBox.jsx';
import PropTypes from 'prop-types';

const UserPage = (props) => {
  const list = props.businessList;

  return (
    <Fragment>
      <div className="top-container">
        <div id="navigation">
          <Navigation
            fetchInformation={props.fetchInformation}
            handleLogout={props.handleLogout}
          />
        </div>
      </div>
      <div>
        <div className="middle-container">
          <span id="user-info">
            <UserInfo userInfo={props.userInfo} />
          </span>
          <span id="business-list">
            {list === null ? (
              <div>
              </div>
            ) : (
              <BusinessList businessList={list} />
            )}
          </span>
          <span id="chatbox">
            <ChatterBox handle={props.userInfo.handle}/>
          </span>
        </div>
      </div>
    </Fragment>
  )
}


UserPage.propTypes = {
  businessList: PropTypes.array.isRequired,
  fetchInformation: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default UserPage;