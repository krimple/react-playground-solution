import React from 'react';
import { connect } from 'react-redux';

import QuizResult from './QuizResult';

const QuizResults = ({ quizResults }) => {
  const questionJSX = quizResults.map(questionEntry => {
  	return (<li><)
  	const answersJSX = questionEntry.answers.map(answerItem => { 
		return (
	  	  <li>
	        <QuizResult 
	          quizId={questionEntry.quizId} 
	          questionId={answerItem.questionId}
	          answerId={answerItem.answerId} />
	      </li>
        );
    });
    // this is the result of answersJSX in the map for each answer
    return (
    	<li>
    	  { answers.quizId } - { answers.player } = 
    	  <ul>{ answerItems }</ul>
    	</li>
    );
  });
  // this is the result of questionJSX in the map for each quiz answers list
  return (
	  <ul>
	    { answersEntry }
	  </ul>
  );
};

function mapStateToProps(reduxState) {
  return {
    quizResults: reduxState.answers || []
  }
}

export default connect(mapStateToProps)(QuizResults);