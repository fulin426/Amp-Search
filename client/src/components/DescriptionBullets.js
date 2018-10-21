import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescriptionBullets = () => {
		return (
			<div className="home-learn">
				<div className="learn-sector">	
					<p className="learn-title">Why Use AmpSearch?</p>
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

export default DescriptionBullets;