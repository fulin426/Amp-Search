import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../actions/actions';
import { setNotAddedCategories } from '../actions/actions';
import { setResults } from '../actions/actions';


class AddedCategories extends Component {

	deleteCategory = (e) => {
		this.props.deleteCategory(e.target.dataset.id);
		this.props.setNotAddedCategories();
    let listedSkills = this.props.addedCategories;
    let jobResults = this.props.jobs.jobs.rss.channel.item
		setTimeout(()=>{this.props.setResults(jobResults, listedSkills);}, 1000)
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
		if (this.props.resultSet === true) {
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
  jobs: state.jobs,
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { deleteCategory, setNotAddedCategories, setResults})(AddedCategories);
