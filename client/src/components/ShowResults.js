import React from 'react';
import { connect } from 'react-redux';
import AddedCategories from "./AddedCategories";
import NotAddedCategories from "./NotAddedCategories";
import JobResults from "./JobResults";
import '../index.css'

const Showresults = React.createClass({
	render() {
		if (this.props.resultSet === true) {
		return (
			<div className="ResultsPage">
				<div className="SkillsList"> 
					<AddedCategories />
					<NotAddedCategories />
				</div>
				<div className="JobResults">
					<JobResults />
				</div>
			</div>
		);
		} else {
			return(
				<div>
			</div>
			);
		}
	}
});

const mapStateToProps = state => ({
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(Showresults);
