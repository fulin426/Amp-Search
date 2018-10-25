import React from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import '../index.css';

class Loading extends React.Component {
render() {
  if (this.props.renderbubble === "add new action/reducer") {
    return (
      <ReactLoading
        type="spin"
        color="#00FFFF"
        height="22px"
        width="22px"
        className="Loading-Bubble" />
      );
    } else {
      return(null);
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
