import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import Question from './Question';

export default class QuestionForm extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    answers: []
  };

  // so stupid
  handleQuestionAnswered = ({ questionId, answerId }) => {
    console.log(`Question answered: ${questionId} - answer ${answerId}`);
    debugger;
    if (questionId && answerId) {
      // clone, then update the clone
      const newAnswers = { ... this.state.answers };

      const answerEntry = newAnswers.find(a => a.questionId === questionId);
      if (answerEntry) {
        answerEntry.answerId = answerId;
      } else {
        newAnswers.push({ questionId: questionId, answerId: answerId});
      }
      this.setState({answers: newAnswers});
    }
  };

  render() {
    const questions = this.props.questions.map((q,i) =>
      <Question key={i}
        question={q}
        onChange={ this.handleQuestionAnswered }
      />
    );
    return (
      <Form>
        <Input label="name" onChange={(event) => {
          console.debugger;
          this.setState({ participant: event.target.value });
        } } />
        { questions }
        <Button
          basic={true}
          color={'red'}
          onClick={this.closeDialog}>Submit Quiz!</Button>
      </Form>
    );
  }
}