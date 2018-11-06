import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css'

class Directions extends Component {
	render() {
    if (this.props.addedCategories.length === 0 &&
		this.props.jobs !== 0) {
  		return (
  			<div>
          <div className="Search-Directions">
            <p>Here are the trending job skills in the area searched.
							Click on one of the <span className="red-skill">RED</span> categories
							and it will turn <span className="green-skill">GREEN</span>.
              Start adding skills and see which jobs match your skillset! </p>
          </div>
  			</div>
  		);
    } else {
      return(null);
    }
	}
}

const mapStateToProps = state => ({
  addedCategories: state.jobs.addedCategories,
	jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Directions);
