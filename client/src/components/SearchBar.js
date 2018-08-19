import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {

/*  componentWillMount() {
    //The Crystal Mill, Colorado, USA
    //shows no results
    let query = '';
    this.props.searchJobs(query);
  }*/

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
    this.refs.zipcode.value = '';
  }

	render() {
		if (this.props.resultSet === true) {
      return (null);
    } else {
      return (
      <div>
        <div className='Landing-Div'>
        </div>  
        <div className="SearchBar-Container">
          
          <h2 className="Title">Stack Overflow Jobs</h2>
          <br />
          <p className="Search-Header">Search by City</p>
          <form onSubmit={this.onFormSubmit}>
            <input
              className="Search-Input"
              placeholder='Search'
              ref='zipcode'
            />
            <input
              className="Search-Button" 
              type="submit" 
              value="Search"
              role="search" 
            />
            </form>
            <ul>
              <li className="App-Description">
                <FontAwesomeIcon icon="chart-line" size="3x" />
                <span className="App-Description-Line">
                Discover which technologies are in demand based on city
                </span>
              </li>
              <li className="App-Description">
                <FontAwesomeIcon icon="chart-pie" size="3x" />
                <span className="App-Description-Line">
                  Find jobs based on how well they are matched to your skillset
                </span>
              </li>
              <li className="App-Description">
                <FontAwesomeIcon icon="clipboard-list" size="3x" />
                <span className="App-Description-Line">
                  Assess which technologies to learn in order to qualify for more jobs
                </span>
              </li>
            </ul>
  			 </div>
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