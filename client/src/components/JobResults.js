import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Directions } from "./Directions";

class JobResults extends React.Component {

	render() {

	let jobSort = this.props.results.sort((a, b) =>
		b.percentage - a.percentage
		);

	jobSort = jobSort.filter(item => item.category !== "" );
	jobSort = jobSort.filter(item => item.percentage !== 0 );
	jobSort = jobSort.filter(item => item.percentage > 25 );

	const jobResults = jobSort.map((listing, index) =>
		<div
			key={index}
			className="jobResult"
		>
			<a role="link" className="Result-Link"href={listing.link} target="_blank">
				{listing.title}
			</a>
			<p className="Required-Skills">Required Skills: {listing.category}</p>
			<p className="Percentage-Match">Percentage Match: {listing.percentage}%</p>
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
