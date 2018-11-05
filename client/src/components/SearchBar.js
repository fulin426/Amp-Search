import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { setResults } from '../actions/actions'
import { showRendering } from '../actions/actions';
import Loading from "./Loading";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.showRendering();
    let query = this.state.term;
    this.props.searchJobs(query);
    this.setState({term: ''});
  }

  componentDidMount() {
  this.nameInput.focus();
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
              value={this.state.term}
              onChange={event => this.setState({term: event.target.value})}
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
