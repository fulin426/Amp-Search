import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import '../index.css';

class Loading extends Component {
render() {
  if (this.props.renderbubble === "show") {
    return (
      <ReactLoading
        type="bars"
        color="#00FFFF"
        height="22px"
        width="22px"
        className="Loading-Bubble" />
      );
    } else {
      return(
      <ReactLoading
        type=""
        height="22px"
        width="22px"
        className="Loading-Bubble" />
      );
    }
  }
}

const mapStateToProps = state => ({
  returned: state.jobs.returned,
  jobs: state.jobs,
  resultSet: state.jobs.resultSet,
  renderbubble: state.jobs.renderbubble
});

export default connect(mapStateToProps)(Loading);
