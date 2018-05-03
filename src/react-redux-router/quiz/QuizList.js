import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import * as actionCreators from '../quiz-store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class QuizList extends Component {

  takeQuiz = (quiz) => {
    this.props.dispatch(actionCreators.takeQuiz(quiz));
  };

  render() {
    const columns = this.props.quizzes.map((q,idx) => {
      const createMarkup = () => {
        return {__html: q.description}
      };
      return (<Grid.Column key={idx}>
        <Card className="cardHeight">
          <Card.Content>
            <Card.Header>{q.title}</Card.Header>
            <Card.Meta><span>{'[' + q.categories.join('], [') + ']'}</span></Card.Meta>
            <Card.Description dangerouslySetInnerHTML={createMarkup()}/>
          </Card.Content>
          <Card.Content extra>
            <Button basic color='green'
                    onClick={ () => { this.takeQuiz(q); } }>
              Take Quiz!
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>);
    });

    return (
      <Grid columns={3}>
        { columns }
      </Grid>);
  }
}

function mapStateToProps(reduxState) {
  return {
    quizzes: reduxState.quizzes  ? reduxState.quizzes : []
  }
}

export default connect(mapStateToProps)(QuizList);
