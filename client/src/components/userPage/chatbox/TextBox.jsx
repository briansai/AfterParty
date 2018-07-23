import React, {Fragment} from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        <form>
          <label>
            <input type="text" name="textBox" value="" onChange={this.handleTextChange}/>
          </label>
        </form>
        <button>
          Send
        </button>
      </Fragment>
    )
  }
}

export default TextBox;

// onClick={this.props.handleMessageSubmit(this.state.query)