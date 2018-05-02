import React, {Component} from 'react';
import { Header, Segment, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import QuestionForm from './QuestionForm';

class QuizDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: this.props.isOpen
    };
  }

  openDialog = () => { this.setState({ dialogOpen: true })};

  closeDialog = (e, d) => {
    this.setState({ dialogOpen: false });
    this.props.onQuestionAnswered('with an answer...');
  };

  componentWillReceiveProps(newProps) {
    console.log('getting props!', newProps);
     this.setState( {
       dialogOpen: newProps.isOpen,
       quiz: newProps.quiz
     });
  }

  handleQuestionsCompleted = (answers) => {
    console.log(`Quiz ${this.state.quiz.id} Questions completed, ${JSON.stringify(answers)}`);
    this.setState({
      dialogOpen: false,
      quiz: null
    });
  };

  render() {
    if (!this.state.quiz) {
     return <p>Please wait...</p>;
    } else {
      return (
        <Modal
          size={'mini'}
          open={this.state.dialogOpen}
          onClose={this.state.closeDialog}>

          <Segment>
            <Header>
              Take Quiz: {this.state.quiz.title}
            </Header>
            <QuestionForm
              questions={this.state.quiz.questions}
              onQuestionsCompleted={this.handleQuestionsCompleted}
            />
          </Segment>
        </Modal>
      );
    }
  }
}

QuizDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onEndQuiz: PropTypes.func.isRequired
};

export default QuizDialog;



