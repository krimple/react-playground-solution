import React, {Component} from 'react';
import { Form, Header, Segment, Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class QuizQuestionDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: this.props.isOpen
    };
  }

  openDialog = () => { this.setState({ dialogOpen: true })};

  closeDialog = (e, d) => {
    console.dir(e)
    console.dir(d);
    this.setState({ dialogOpen: false });
    this.props.onQuestionAnswered('with an answer...');
  };

  componentWillReceiveProps(newProps) {
    console.log('getting props!', newProps);
     this.setState( { dialogOpen: newProps.isOpen });
  }

  render() {
    return (
      <Modal
        size={'mini'}
        open={this.state.dialogOpen}
        onClose={this.state.closeDialog}>
      <Segment>
        <Header>
          Take Quiz: Favorite Food
        </Header>
        <Form>
          <Form.Field onChange={(e, d) => {
            debugger;
            this.setState({
              answer: d.value
            });
          }}>
            <label>What is your favorite food?</label>
            <Form.Radio label="Broccoli" value={1}/>
            <Form.Radio label="Pizza" value={2}/>
            <Form.Radio label="Beer" value={3}/>
          </Form.Field>
          <Button
            basic={true}
            color={'red'}
            onClick={this.closeDialog}>Answer!</Button>
        </Form>
      </Segment>
      </Modal>
    );
  }
}

QuizQuestionDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

export default QuizQuestionDialog;



