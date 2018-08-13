import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotAddedCategories extends Component {
	render() {
	const notAdded = this.props.notAdded.map((category, index) => 
		<li 
			key={index} 
			className="Results"
		>
			{category}
		</li>
		);

		return (
			<div>
				<h3>Skills You Don't Have</h3>
				<ul>{notAdded}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  notAdded: state.jobs.NotAddedCategories,
});

export default connect(mapStateToProps)(NotAddedCategories);
