import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// This is a STATELESS COMPONENT
// so we can implement it as a pure function
// that takes a props parameter. 
// 
// And we are destructuring props passed to the function
// so that we don't do a series of three variables in
// the beginning of the function, like:
//   const questionId = props.questionId;
//   const answerId = props.answerId;
//   const quiz = props.quiz
// makes it shorter...
const QuizResultQuestion = ({ question, quiz }) => {
	const questionAnswerOptions = question.answers;
	const selectedAnswerText = answer.answer;
	const correct = answer.correct;
	return (
      <Fragment>   {/* Fragments are tagless containers */}
        <h3>Question</h3>
        <p>{ question.questionText }</p>
        <h3>Answers</h3>
        <p>{ answerText }</p>
	    <p>Correct? { correct ? 'YES!' : 'NO!' }</p>
	  </Fragment>
	);

};

// The stateless function DOES have props, and so we can
// pull in the actual quiz from the quiz from the INCOMING
// quizId parameter from QuizResults. That's right, the
// state mapping function in react-redux not only has access
// to the Redux state as the first parameter, but optionally
// if you want to use an incoming prop (like the quizId from
// the database call, passed to this component as a prop)
// to look up something in state, you can do that with the
// second parameter (ownProps, as in "my own props") 
function mapStateToProps(reduxState, ownProps) {
	const quiz = reduxState.quizzes.find(q => ownProps.)
  return {
		questionText: reduxState.quizzes.find(q => ownProps.quizId === q.id) || {},
		
  }
}

export default connect(mapStateToProps)(QuizResultQuestion);