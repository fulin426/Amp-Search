import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';

class SearchBar extends React.Component {

/*  componentWillMount() {
    //The Crystal Mill, Colorado, USA
    //shows no results
    let query = 'Seattle';
    this.props.searchJobs(query);
  }*/

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
  }

	render() {
		if (this.props.resultSet === true) {
      return (
        <div>
        </div>);
    } else {
      return (
      <div>
        <h2>Search By Region</h2>
        <br />
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Enter Zipcode'
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