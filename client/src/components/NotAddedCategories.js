import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNotAdded } from '../actions/actions';
import { deleteNotAddedCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';

class NotAddedCategories extends Component {
	
	deleteCategory = (e) => {
		this.props.deleteNotAddedCategory(e.target.dataset.id);
		this.props.addCategory(e.target.dataset.id);
	}

	render() {
	const notAdded = this.props.notAdded.map((category, index) => 
		<li 
			key={index}
			data-id={category}
			className="Results"
			onClick={this.deleteCategory}
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

export default connect(mapStateToProps, { addCategory, deleteNotAddedCategory })(NotAddedCategories);
