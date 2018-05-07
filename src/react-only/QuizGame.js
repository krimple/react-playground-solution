import React, {Component} from 'react';
import {Container, Header, Divider} from 'semantic-ui-react';
import QuizList from './QuizList';
import QuizDialog from './QuizDialog';
import PropTypes from 'prop-types';
import * as axios from "axios/index";

export default class QuizGame extends Component {
  state = {
    openQuiz: false
  };

  // load game state for non-redux version
  componentDidMount() {
    axios.get('quizzes.json')
      .then(payload => {
        this.setState({ quizzes: payload.data });
      });
  }

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
          quizzes={this.state.quizzes}
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


