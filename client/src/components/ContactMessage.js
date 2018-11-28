import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css'

class ContactMessage extends Component {
	render() {
		if (this.props.returned === true || this.props.resultSet === true) {
      return (null);
    } else {
		return (
				<div className="contact-container">
          <p>Feedback or suggestions are much appreciated!</p>
				</div>
			);
		}
 	}
}

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  resultSet: state.jobs.resultSet
});

export default connect(mapStateToProps)(ContactMessage);
