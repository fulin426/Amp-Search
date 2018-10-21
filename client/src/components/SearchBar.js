import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {

  componentWillMount() {
    //The Crystal Mill, Colorado, USA
    //shows no results
/*    let query = 'San Mateo';
    this.props.searchJobs(query);*/
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
    this.refs.zipcode.value = '';
  }

	render() {
		if (this.props.returned === true || this.props.resultSet === true) {
      return (null);
    } else {
      return (
      <div> 
        <div className="SearchBar-Container">
          <p className="Search-Header">Search by City or ZipCode</p>
          <form onSubmit={this.onFormSubmit} role="search">
              <input
                className="Search-Input"
                placeholder='Search'
                ref='zipcode'
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
}

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  jobs: state.jobs,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { searchJobs })(SearchBar);