import React, { Fragment } from 'react';

const MessageEntry = props => {
  return (
    <Fragment>
      <p>
        <span>
          <strong>{props.message.handle}: </strong>
        </span>
        <span>
          {props.message.message}
        </span>
      </p>
    </Fragment>
  )
}

export default MessageEntry;