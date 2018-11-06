import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNotAddedCategory } from '../actions/actions';
import { addCategory } from '../actions/actions';
import { setResults } from '../actions/actions';

class NotAddedCategories extends Component {
	componentDidMount() {
		let selected = this.props.notAdded[0];
		this.props.deleteNotAddedCategory(selected);
		this.props.addCategory(selected);

		let listedSkills = this.props.addedCategories;
    listedSkills.push(selected);

		let jobResults = this.props.jobs.rss.channel.item
		this.props.setResults(jobResults, listedSkills);
	}

	deleteCategory = (e) => {
		let selected = e.target.dataset.id;

		this.props.deleteNotAddedCategory(selected);
		this.props.addCategory(selected);

    let listedSkills = this.props.addedCategories;
    listedSkills.push(selected);

    let jobResults = this.props.jobs.rss.channel.item
		this.props.setResults(jobResults, listedSkills);
	}

	render() {
		const notAdded = this.props.notAdded.map((category, index) =>
		<div key={index} className="Resulted-Categories">
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
	if (this.props.jobs !== 0) {
		return (
			<div className="Skills-Container">
				<h3>Not Yet Acquired</h3>
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
  jobs: state.jobs.jobs,
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps, { addCategory, deleteNotAddedCategory, setResults })(NotAddedCategories);
