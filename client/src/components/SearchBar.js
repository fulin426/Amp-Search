import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';

class SearchBar extends React.Component {

  componentWillMount() {
    //The Crystal Mill, Colorado, USA
    //shows no results
    let query = 'Seattle';
    this.props.searchJobs(query);
  }

  /*['os:results']*/

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
    this.refs.zipcode.value = '';
  }

	render() {
		if (this.props.resultSet === true) {
      return (
        <div>
        </div>);
    } else {
      return (
      <div>
        <h2>Stack Overflow Jobs</h2>
        <br />
        <p>Search by City or Zipcode</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Search'
            ref='zipcode'
          />
          <input 
            type="submit" 
            value="Search" 
          />
          </form>
			 </div>
		  );
    }
	}
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { searchJobs })(SearchBar);