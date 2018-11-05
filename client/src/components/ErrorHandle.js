import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css'

class ErrorHandle extends Component {
	render() {
    if (this.props.jobs === 0) {
  		return (
  			<div>
          <div className="Search-Directions">
            <p>No results for {this.props.query}. Please try searching a different area.</p>
          </div>
  			</div>
  		);
    } else {
      return(null);
    }
	}
}

const mapStateToProps = state => ({
  addedCategories: state.jobs.addedCategories,
  jobs: state.jobs.jobs,
  query: state.jobs.query
});

export default connect(mapStateToProps)(ErrorHandle);
