import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNotAdded } from '../actions/actions';

class NotAddedCategories extends Component {
	
	setNotAdded = (e) => {
		console.log("test");
	}

	render() {
	const notAdded = this.props.notAdded.map((category, index) => 
		<li 
			key={index}
			data-id={category}
			className="Results"
			onClick={this.setNotAdded}
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

export default connect(mapStateToProps, { setNotAdded })(NotAddedCategories);
