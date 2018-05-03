import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import QuizResultQuestionList from './QuizResultQuestionList';

const QuizResultList = ({ quizzes, quizResults }) => {
    if (!quizResults) return <p>Please wait...</p>;
    const quizResultQuestionList = quizResults.map(
      quizResultEntry => { 
        const quiz = quizzes.find(q => q.id === quizResultEntry.quizId);
        return (
           <ul>
             <h3>Quiz Answers for { quiz.title } - { quizResultEntry.playerName }</h3>
             <QuizResultQuestionList
                quiz={quiz}
                quizResults={quizResultEntry.answers} 
             />
          </ul>
        );
    });  
  return (
      <div>
      { quizResultQuestionList }
      </div>
  );
};

function mapStateToProps(reduxState, ownProps) {
  return {
      quizResults: reduxState.quizResults || [],
      quizzes: reduxState.quizzes
      // each result is a quiz id, a player name, and a collection of answers
  };
}

export default connect(mapStateToProps)(QuizResultList)