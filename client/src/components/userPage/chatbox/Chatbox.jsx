import React, {Fragment} from 'react';
import MessageBox from './MessageBox.jsx';
import TextBox from './TextBox.jsx';

const ChatterBox = (props) => {
  return (
    <Fragment>
      <div>
        Chatbox Placeholder
      </div>
      <div id="message-box">
        <MessageBox />
      </div>
      <div id="text-box">
        <TextBox />
      </div>
    </Fragment>
  )
}

export default ChatterBox;