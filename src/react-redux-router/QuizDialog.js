import React, {Component} from 'react';
import { Header, Segment, Modal } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';

class QuizDialog extends Component {

  render() {
    return (
      <Modal
        size={'mini'}
        open={this.props.isOpen}>
        <Segment>
          <Header>
            Take Quiz: {this.props.quizTitle}
          </Header>
          <QuestionForm />
        </Segment>
      </Modal>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    isOpen: reduxState.dialogOpen,
    quizTitle: reduxState.quiz ? reduxState.quiz.title : ''
  };
}

export default connect(mapStateToProps)(QuizDialog);

