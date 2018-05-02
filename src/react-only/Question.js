import React, {Component, Fragment} from 'react';
import { Form, Header, Radio, Segment, Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Question extends Component {

  submitAnswer = () => {
    if (this.state.answer) {
      this.props.onAnswerSubmitted(this.state.answer);
    }
  };

  render() {
    const self = this;
    const answer = this.state && this.state.answer || undefined;
    const answers = this.props.question.answers.map((a,i) => (
      <Form.Field
        key={i}
        control={Radio}
        label={a.answer}
        checked={answer && answer === a.id}
        value={a.id}
        onChange={(e, d) => {
          // mechanical change
          this.setState({ answer: d.value });
          // event one level deep in function with binding = need alias
          // or additional bind
          self.props.onChange({
            questionId: self.props.question.id,
            answerId: d.value
          });
        }}/>
    ));

    return (
      <Fragment>
      <Form.Group>
        <label>{ this.props.question.question }</label>
        { answers }
      </Form.Group>
      </Fragment>
    );
  }
}
