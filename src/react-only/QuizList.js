import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class QuizList extends Component {

  render() {
    console.log('quizzes', this.props.quizzes);
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
            <Button basic color='green'>Take Quiz!</Button>
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

QuizList.propTypes = {
  quizzes: PropTypes.array.isRequired
};


