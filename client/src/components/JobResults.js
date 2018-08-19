import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobResults extends Component {
	
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
			<a href={listing.link} target="_blank">
				{listing.title}
			</a>
			<p>Required Skills: {listing.category}</p>
			<p>Percentage Match: {listing.percentage}%</p>
		</div>
		);
	if (this.props.resultSet === true) {
		return (
			<div>
			<h3>Jobs Results ({jobResults.length})</h3>
				<div>
					{jobResults}
				</div>
			</div>
		);
		} else {
			return (
				<div>
					
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
  results: state.jobs.setResults,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(JobResults);