import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobResults extends Component {
	render() {
		
	if (this.props.resultSet) {
	const jobResults = this.props.results.map((listing, index) => 
		<div 
			key={index}
			className="jobResult"
		>
			<a href={listing.link} target="_blank">
				{listing.title}
			</a>
			<p>Required Skills: {listing.category}</p>

		</div>
		);
		return (
			<div>
				<div>
					{jobResults}
				</div>
			</div>
		);
		} else {
			return (
				<div></div>
			);
		}
	}
}

const mapStateToProps = state => ({
  results: state.jobs.setResults,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(JobResults);