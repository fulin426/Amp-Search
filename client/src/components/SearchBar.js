import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { setResults } from '../actions/actions'
import { showRendering } from '../actions/actions';
import Loading from './Loading';
// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      query: '',
      loaded: 'No'
    };
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.loaded === 'Yes') {
      this.props.showRendering();
      let query = this.state.city;
      this.props.searchJobs(query);
      this.setState({
        query: '',
        loaded: 'No'
      });
    }
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };
    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {
  // Extract City From Address Object
  let addressObject = this.autocomplete.getPlace();
  let address = addressObject.address_components;
  // Check if address is valid
  if (address) {
    this.setState(
      {
        city: address[0].long_name,
        query: addressObject.formatted_address,
        loaded: 'Yes'
      },
    );
  }
}

	render() {
    return (
    <div>
      <div className="SearchBar-Container">
        <div className="Header-Wrap">
          <p className="Search-Header">Search by City</p>
          <Loading />
        </div>
        <form onSubmit={this.onFormSubmit} role="search">
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYwwQ-wTWZ6jI75jcsRz4if7dv30i5evo&libraries=places"
            onLoad={this.handleScriptLoad}
          />
          <input
            value={this.state.query}
            id="autocomplete"
            onChange={event => this.setState({query: event.target.value})}
            className="Search-Input"
            placeholder='Search'
            ref={(input) => { this.nameInput = input; }}
          />
          <input
            className="Search-Button"
            type="submit"
            value="Search"
            role="button"
          />
        </form>
			 </div>
     </div>
	  );
	}
}

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  addedCategories: state.jobs.addedCategories,
  jobs: state.jobs,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { searchJobs, setResults, showRendering})(SearchBar);
