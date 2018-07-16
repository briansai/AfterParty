import React from 'react';
import PropTypes from 'prop-types';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qs: '',
    }
  }

  handleQuery(event) {
    this.setState({
      qs: event.target.value,
    })
  }
   
  render() {
    return (
      <span className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="search a city"
          onChange={(e) => this.handleQuery(e)}
        />
        <button
          className="search-button"
          onClick={() => (this.props.fetchInformation('getBusinessList', {location: this.state.qs}))}
        >
          Search
        </button>
      </span>
    )
  }
}


Search.propTypes = {
  fetchInformation: PropTypes.func.isRequired,
}

export default Search;