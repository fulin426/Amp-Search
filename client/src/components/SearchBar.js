import React from "react";
import { connect } from 'react-redux';
import { searchJobs } from '../actions/searchAction';

class SearchBar extends React.Component {
/*  constructor(props) {
    super(props);
    this.state = {
      jobs:'',
      returned: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }*/

/*  componentWillMount() {
    let query = 'San Jose';
    this.props.searchJobs(query);
  }*/

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.refs.zipcode.value;
    this.props.searchJobs(query);
  }
	render() {
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

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, { searchJobs })(SearchBar);