import React, {Component} from 'react';
import {Container, Header, Divider} from 'semantic-ui-react';
import QuizList from './QuizList';
import QuizDialog from './QuizDialog';
import PropTypes from 'prop-types';

export default class QuizGame extends Component {
  state = {
    openQuiz: false
  };

  reportAnswer = (answer) => {
    console.log(`QuizQuestionDialog answered ${answer}`);
  };

  handleTakeQuiz = (quiz, answers) => {
    this.setState({
      quiz: quiz,
      openQuiz: true
    })
  };

  handleEndQuiz = () => {
    this.setState({
      quiz: undefined,
      openQuiz: false
    })
  };

  render() {
    return (
      <Container>
        <Header>Quizzer</Header>
        <Divider />
        <QuizList
          quizzes={this.props.quizzes}
          onTakeQuiz={this.handleTakeQuiz}
        />
        <QuizDialog
          quiz={this.state.quiz}
          isOpen={this.state.openQuiz}
          onEndQuiz={this.handleEndQuiz} />
      </Container>
    );
  }
};

QuizGame.propTypes = {
  quizzes: PropTypes.array.isRequired
};

