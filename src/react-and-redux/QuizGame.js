import React, {Component} from 'react';
import {Container, Header, Divider} from 'semantic-ui-react';
import QuizList from './QuizList';
import QuizDialog from './QuizDialog';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import * as actionCreators from './quiz-store';

import store from './quiz-store';

store.dispatch(actionCreators.loadQuizzes());
// fire up the opening gambit


export default class QuizGame extends Component {

  handleTakeQuiz = (quiz) => {
    this.props.dispatch(actionCreators.takeQuiz(quiz));
  };

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header>Quizzer</Header>
          <Divider />
          <QuizList />
          <QuizDialog />
        </Container>
      </Provider>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    quizzes: reduxState.quizzes || []
  };
}

