import React, {Fragment} from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList.jsx';
import GreenButton from '../../../materialUI/GreenButton.jsx';
import { userInfo } from 'os';


class ChatterBox extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      inputMessage: '',
      messages: []
    }

    this.socket = io.connect('http://localhost:3000');
    this.socket.on('client_message', (data) => {
      this.addMessage(data);
    })

    this.renderNodata = this.renderNoData.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const inputValue = event.target.value;

    this.setState({
      inputMessage: inputValue
    })

    event.preventDefault();
  }

  addMessage(data) {
    this.setState({
      messages: this.state.messages.concat([data])
    })
  }

  handleSubmit(event) {
    this.socket.emit('server_message', {
      handle: this.props.handle,
      message: this.state.inputMessage,
    }, () => 
    this.setState({
      inputMessage: '',
    }));

    event.preventDefault();
  }

  renderNoData() {
    return (
      <div>
      </div>
    )
  }

  render() {
    return (
      <span className="mid-components">
        <h2>Live Chat</h2>
        <div id="chat-window">
          {this.state.messages.length === 0 ? (
            this.renderNoData()
          ) : (
            <MessageList messages={this.state.messages} />
          )}
        </div>
        <div className="chat-component">
          Username: {this.props.handle}
        </div>
        <input
          className="chat-component"
          type="text"
          name="message"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <div>
          <GreenButton
            id="chat-send"
            handleSubmit={this.handleSubmit}
            buttonText="Send"
          />
        </div>
      </span  >
    );
  }
}

export default ChatterBox;
