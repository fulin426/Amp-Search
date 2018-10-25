import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css'

class Directions extends React.Component {
	render() {
    if (this.props.addedCategories.length === 0) {
  		return (
  			<div>
          <div className="Search-Directions">
            <p>Here are the trending job skills in the area searched.
              Start adding skills and see which jobs match your skillset! </p>
          </div>
  			</div>
  		);
    } else {
      return(null)
    };
	}
}

const mapStateToProps = state => ({
  addedCategories: state.jobs.addedCategories
});

export default connect(mapStateToProps)(Directions);
