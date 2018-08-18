import React from 'react';
import AddedCategories from "./AddedCategories";
import NotAddedCategories from "./NotAddedCategories";
import JobResults from "./JobResults";
import '../index.css'

const Showresults = React.createClass({
	render() {
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
	}
});

export default Showresults;
