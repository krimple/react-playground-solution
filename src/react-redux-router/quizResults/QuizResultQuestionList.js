import React from 'react';
import { connect } from 'react-redux';
import QuizResultList from './QuizResultList';

const QuizResultQuestionList = ({ questions, playerName}) => {
  const quizResultQuestions = questions.map(
      quizResultQuestion => { 
        debugger;
          return (
            <li>
              { quizResultQuestion.questionText} - { playerName } - { quizResultQuestion.answerId }
              {/* <QuizResultQuestion 
                quiz={props.quiz}
              question={props.question} /> */}
            </li>
          );
    });  
  return (
    <ul>
      {quizResultQuestions}
    </ul>
  );
}

function mapStateToProps(reduxState, ownProps) {
  const questionData = ownProps.quiz.questions;
  const mappedQuizQuestions = ownProps.quizResults.map(quizAnswerAndQuestion => {
    const originalQuestionData = questionData.find(q => q.id === quizAnswerAndQuestion.questionId);
    return {
      questionText: originalQuestionData.question,
      answers: originalQuestionData.answers,
      playerAnswerId: quizAnswerAndQuestion.answerId
    };
  });     

  return {
    questions: mappedQuizQuestions,
    playerName: ownProps.playerName
  };
}

export default connect(mapStateToProps)(QuizResultQuestionList);