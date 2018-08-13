import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../actions/actions';
import { setNotAddedCategories } from '../actions/actions';


class AddedCategories extends Component {

	deleteCategory = (e) => {
		this.props.deleteCategory(e.target.dataset.id);
		this.props.setNotAddedCategories();
	}

	render() {
		const displayCategories = this.props.addedCategories.map((category, index) =>
			<li 
				key={index}
				className="Results"
				data-id={category}
				onClick={this.deleteCategory}
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

export default connect(mapStateToProps, { deleteCategory, setNotAddedCategories})(AddedCategories);
