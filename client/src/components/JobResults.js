import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobResults extends Component {

	render() {
	let jobSort = this.props.results;
	jobSort = jobSort.filter(item => item.category !== "" );
	jobSort = jobSort.filter(item => item.percentage !== 0 );
	jobSort = jobSort.filter(item => item.percentage > 15 );
	jobSort = jobSort.sort((a, b) => b.percentage - a.percentage);

	const jobResults = jobSort.map((listing, index) =>
		<div
			key={index}
			className="jobResult"
		>
			<a role="link" className="Result-Link"href={listing.link} target="_blank">
				{listing.title}
			</a>
			<p className="Required-Skills">Required Skills: {listing.category}</p>
			<p className="Percentage-Match">Match: {listing.percentage}%</p>
		</div>
		);
		return (
			<div>
			<h3 className="JobResults-Header">Jobs Results for {this.props.query} ({jobResults.length})</h3>
				<div>
					{jobResults}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  results: state.jobs.setResults,
  resultSet: state.jobs.resultSet,
	query: state.jobs.query
});

export default connect(mapStateToProps)(JobResults);
