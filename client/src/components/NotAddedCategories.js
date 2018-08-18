import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNotAdded } from '../actions/actions';
import { deleteNotAddedCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';
import { setResults } from '../actions/actions';

class NotAddedCategories extends Component {
	
	deleteCategory = (e) => {
		this.props.deleteNotAddedCategory(e.target.dataset.id);
		this.props.addCategory(e.target.dataset.id);
		let listedSkills = this.props.addedCategories;
    this.props.setResults(this.props.jobs.jobs.rss.channel.item, listedSkills);
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
	if (this.props.resultSet === true) {
		return (
			<div>
				<h3>Skills You Don't Have</h3>
				<ul>{notAdded}</ul>
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
  notAdded: state.jobs.NotAddedCategories,
  addedCategories: state.jobs.addedCategories,
  jobs: state.jobs,
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { addCategory, deleteNotAddedCategory, setResults })(NotAddedCategories);
