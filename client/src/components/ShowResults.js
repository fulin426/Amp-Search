import React from 'react';
import { connect } from 'react-redux';
import AddedCategories from "./AddedCategories";
import NotAddedCategories from "./NotAddedCategories";
import JobResults from "./JobResults";
import '../index.css'

class Showresults extends React.Component {

	startOver = (e) => {
		e.preventDefault();
		location.reload();
	}
	
	render() {
		if (this.props.resultSet === true) {
		return (
			<div className="Showresults">
				<div className='ResultsPage-Div'>
					<h3 className="ResultsPage-Header">Amp Search</h3>
					<button className="Restart-Button"
						onClick={this.startOver}
					>Start Over
					</button>
      	</div>  
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
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(Showresults);
