import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreators from './quiz-store';

class QuestionForm extends Component {

  state = {
    answers: this.props.questions.map(question => {
      return { questionId: question.id, answerId: null };
    })
  };

  handleQuestionAnswered = (questionId, answerId) => {
    if (questionId && answerId) {
      // clone, then update the clone
      const newAnswers = [ ...this.state.answers ];

      const answerEntry = newAnswers.find(a => a.questionId === questionId);
      answerEntry.answerId = answerId;
      this.setState({answers: newAnswers});
    }
  };

  render() {
    const questions = this.props.questions.map((question, iQuestion) => {
      const answers = question.answers.map((answer, iAnswer) => {
        return (
          <Form.Field
            key={iAnswer}
            control={Radio}
            label={answer.answer}
            value={answer.id}
            onChange={(e, t) => { this.handleQuestionAnswered(question.id, answer.id) }}
            checked={!!this.state.answers.find(a => a.questionId === question.id && a.answerId === answer.id)} />
        );
      });
       return (
         <Fragment>
           { /* <Form.Group key={iQuestion} > */ }
           <label>{ question.question }</label>
           { answers }
           { /* </Form.Group> */ }
         </Fragment>
       );
    });

    return (
      <Form>
        <Form.Field>
          <Input label="Participant Name" onChange={ (event) => {
          this.setState({ participant: event.target.value });
        } } />
        </Form.Field>
        { questions }
        <Button
          type="button"
          basic={true}
          color={'red'}
          disabled={ this.state.answers.findIndex(a => a.answerId === null) > -1}
          onClick={() => {
            this.props.dispatch(actionCreators.answerQuestions(this.state.participant, this.state.answers));
            this.props.dispatch(actionCreators.endQuiz()); }}>
          Submit Quiz!
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    questions: reduxState.quiz.questions
  }
}

export default connect(mapStateToProps)(QuestionForm);