import React from 'react';
import { connect } from 'react-redux';
import AddedCategories from "./AddedCategories";
import NotAddedCategories from "./NotAddedCategories";
import JobResults from "./JobResults";
import '../index.css'

class Showresults extends React.Component {
	render() {
		if (this.props.jobs.returned === true && this.props.jobs.jobs.rss.channel['os:totalResults']._text > 0) {
		return (
			<div className="Showresults">
				<div className="ResultsPage">
					<div className="SkillsList"> 
						<AddedCategories />
						<NotAddedCategories />
					</div>
					<div className="JobResults">
						<JobResults />
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
