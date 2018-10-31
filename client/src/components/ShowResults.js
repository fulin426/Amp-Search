import React from 'react';
import { connect } from 'react-redux';
import AddedCategories from "./AddedCategories";
import NotAddedCategories from "./NotAddedCategories";
import JobResults from "./JobResults";
import Directions from "./Directions";
import ErrorHandle from "./ErrorHandle";
import '../index.css'

class Showresults extends React.Component {
	render() {
		if (this.props.jobs.returned === true) {
		return (
			<div className="Showresults">
				<div className="ResultsPage">
					<div className="SkillsList">
						<AddedCategories />
						<NotAddedCategories />
					</div>
					<div className="JobResults">
						<JobResults />
						<Directions />
						<ErrorHandle />
					</div>

				</div>
			</div>
		);
		} else {
			return(null);
		}
	}
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(Showresults);
