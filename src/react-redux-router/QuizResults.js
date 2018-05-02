import React from 'react';
import { connect } from 'react-redux';

const QuizResults = ({ quizResults }) => {
  const results = quizResults.map(r =>
    <li>{ r.player } = { JSON.stringify(r.answers) }</li>);
  return <ul>{ results }</ul>;
};

function mapStateToProps(reduxState) {
  return {
    quizResults: reduxState.answers || []
  }
}

export default connect(mapStateToProps)(QuizResults);