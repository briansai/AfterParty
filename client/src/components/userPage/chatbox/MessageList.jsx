import React, { Fragment } from 'react';
import MessageEntry from './MessageEntry.jsx';

const MessageList = props => (
  props.messages.map((message) => 
    <div id="output">
      <MessageEntry message={message}/>
    </div>
  )
);

export default MessageList;