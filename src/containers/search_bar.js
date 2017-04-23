import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // bind the context of onInputChange - new for callback that ref this.OnInputChange render fx
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // vanilla JS callback
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  // prevent default post form behavior using onFormSubmit fx / onSubmit form element -> for AJAX request / response
  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data from our API using key and city/country var input...
    // http://api.openweathermap.org/data/2.5/forecast?q=Jacksonvllle,us&appid=81bad772d260c81d90edf30506e709c9

    // call our actionCreator from export default connect BOTTOM
    this.props.fetchWeather(this.state.term);

    // clear search input after search is executed and rerender empty string to end-user
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get five day forecast in your top cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

// hookup our actionCreator fetchWeather to our App container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// remove export default in class SearchBar on TOP, connect to SearchBar button onFormSubmit
export default connect(null, mapDispatchToProps)(SearchBar);
