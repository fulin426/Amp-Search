import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { setResults } from '../actions/actions';

class SearchBar extends React.Component {

  componentWillMount() {
    if (this.props.jobs.returned === true) {
      this.props.setResults(this.props.jobs.jobs.rss.channel.item);
    } 
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
    this.refs.zipcode.value = '';
  }

  showResults = () => {
    let listedSkills = this.props.addedCategories;
    this.props.setResults(this.props.jobs.jobs.rss.channel.item, listedSkills);
  }

	render() {   
    if (this.props.jobs.returned === true && 
      this.props.jobs.jobs.rss.channel['os:totalResults']._text > 0) {
      console.log('fired!');
      {this.showResults};
    };

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

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  jobs: state.jobs,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { searchJobs, setResults })(SearchBar);