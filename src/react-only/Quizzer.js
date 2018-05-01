import React, {Component} from 'react';
import {Container, Form, Header, Divider} from 'semantic-ui-react';
import QuizList from './QuizList';
import QuizQuestionDialog from './QuizQuestionDialog';
import PropTypes from 'prop-types';

export default class Quizzer extends Component {
  state = {
    openQuizQuestion: false
  };

  reportAnswer = (answer) => {
    console.log(`QuizQuestionDialog answered ${answer}`);
  };

  render() {
    return (
      <Container>
        <Header>Quizzer</Header>
        <Divider></Divider>
        <QuizList
          quizzes={this.props.quizzes}
        />
        {this.props.quizzes &&
          <Form.Checkbox label="Show dialog"
                         onChange={(e, d) => {
                           this.setState({openQuizQuestion: d.checked});
                         }}/>
        }
        <QuizQuestionDialog
          isOpen={this.state.openQuizQuestion}
          onQuestionAnswered={this.reportAnswer}/>
      </Container>
    );
  }
};

Quizzer.propTypes = {
  quizzes: PropTypes.array.isRequired
};

