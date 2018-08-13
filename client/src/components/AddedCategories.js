import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddedCategories extends Component {

	render() {
		const displayCategories = this.props.addedCategories.map((category, index) =>
			<li 
				key={index}
				className="Results"
			>
				{category}
			</li>
		);
		if (this.props.returned) {
			return (
				<div>
					<h3>Skills You Know</h3>
					<ul>{displayCategories}</ul>
				</div>
			);
		} else {
			return(
				<div></div>
			);
		}
	}
}
const mapStateToProps = state => ({
  addedCategories: state.jobs.addedCategories,
  returned: state.jobs.returned
});

export default connect(mapStateToProps)(AddedCategories);