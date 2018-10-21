import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNotAddedCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';
import { setResults } from '../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotAddedCategories extends Component {
	
	deleteCategory = (e) => {
		let selected = e.target.dataset.id;
		
		this.props.deleteNotAddedCategory(selected);
		this.props.addCategory(selected);
		
    let listedSkills = this.props.addedCategories;
    listedSkills.push(selected);

    let jobResults = this.props.jobs.jobs.rss.channel.item
		this.props.setResults(jobResults, listedSkills);	
	}

	render() {
		const notAdded = this.props.notAdded.map((category, index) => 
		<div key={index} className="Resulted-Categories">
			<FontAwesomeIcon className="icon" icon="minus-circle" size="1x" />
			<li 
				key={index}
				data-id={category}
				className="Result-Skills NotAdded"
				onClick={this.deleteCategory}
			>
				{category}
			</li>
		</div>
		);
	if (true) {
		return (
			<div className="Skills-Container">
				<h3>Skills You Don't Have</h3>
				<ul>{notAdded}</ul>
			</div>
		);
	} else {
			return(null);
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
