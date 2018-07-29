import React, {Fragment} from 'react';
import io from 'socket.io-client'

class ChatterBox extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      message: '',
      handle: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

    // Emit events

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
    
    console.log(value);
  }

  handleSendMessage(e) {
    const socket = io.connect('http://localhost:3000');
    const output = document.getElementById('output');

    socket.emit('chat', {
      message: this.state.message,
      handle: this.state.handle
    });

    socket.on('chat', function(data){
      console.log(data);
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    });

    e.preventDefault();
  }

  render() {
    // Listen for events


    // socket.on('typing', function(data){
    //   feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    // });

    return (
      <Fragment>
        <h2>Yummy Chat</h2>
        <div id="chat-window">
          <div id="output"></div>
        </div>
        <input 
          className="chat-input"
          type="text"
          name="handle"
          placeholder="Handle"
          value={this.state.handle}
          onChange={this.handleInputChange}
        />
        <input
          className="chat-input"
          type="text"
          name="message"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <button id="chat-send" onClick={this.handleSendMessage}>Send</button>
      </Fragment>
    );
  }
}

export default ChatterBox;
