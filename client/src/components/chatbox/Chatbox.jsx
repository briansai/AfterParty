import React from 'react';
import MessageBox from './MessageBox.jsx';
import TextBox from './TextBox.jsx';

const ChatterBox = (props) => {
  return (
    <div>
      <div>
        Chatbox Placeholder
      </div>
      <div id="message-box">
        <MessageBox />
      </div>
      <div id="text-box">
        <TextBox />
      </div>
    </div>
  )
}

export default ChatterBox;