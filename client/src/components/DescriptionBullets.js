import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DescriptionBullets extends React.Component {
	render() {
		if (this.props.returned === true || this.props.resultSet === true) {
      return (null);
    } else {
		return (
				<div className="home-learn">
					<div className="learn-sector">	
						<div className="learn-title-wrapper">
							<p>Why Use AmpSearch?</p>
					  </div>
					  <div className="App-Description">
	          	<FontAwesomeIcon icon="chart-line" size="3x" />
	          	<span className="App-Description-Line">
	          		Discover which technologies are in demand based on city
	          	</span>
	          </div>
	          <div className="App-Description">
	          	<FontAwesomeIcon icon="chart-pie" size="3x" />
	          		<span className="App-Description-Line">
	          			Find jobs based on how well they are matched to your skillset
	          		</span>
	         		</div>
	          <div className="App-Description">
	          	<FontAwesomeIcon icon="clipboard-list" size="3x" />
	         	 	<span className="App-Description-Line">
	          		Assess which technologies to learn in order to qualify for more jobs
	          	</span>
	          </div>
	          <div className="App-Description">
	          	<FontAwesomeIcon icon="smile-beam" size="3x" />
	         	 	<span className="App-Description-Line">
	          		Free to use, no sign up, no ads
	          	</span>
	          </div>
	        </div>  
				</div>
			);
		}
 	}
}

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(DescriptionBullets);