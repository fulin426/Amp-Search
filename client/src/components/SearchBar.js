import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { setResults } from '../actions/actions';
import Loading from "./Loading";

class SearchBar extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
    this.refs.zipcode.value = '';
  }

	render() {
    return (
    <div>
      <div className="SearchBar-Container">
        <div className="Header-Wrap">
          <p className="Search-Header">Search by City or ZipCode</p>
          <Loading />
        </div>
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

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  addedCategories: state.jobs.addedCategories,
  jobs: state.jobs,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { searchJobs, setResults })(SearchBar);
