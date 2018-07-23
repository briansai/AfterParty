import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.firstName || '',
      lastName: this.props.lastName || '',
      avatar: this.props.avatar || '',
      description: this.props.description || '',
    }
  
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState = {
      [name]: value,
    }
  }

  render() {
    return (
      <Fragment>
        <form>
          <label>
            First Name: 
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleEdit}/>
          </label>
          <label>
            Last Name: 
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleEdit}/>
          </label>
          <label>
            Avatar: 
            <input type="text" name="avatar" value={this.state.avatar} onChange={this.handleEdit} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleEdit} />
          </label>
        </form>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Fragment>
    )
  }
}

export default UserEdit;
