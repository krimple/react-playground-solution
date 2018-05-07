import React, {Component} from 'react';
import {Button, Card, Container, Divider, Form, Grid, Header, Segment} from 'semantic-ui-react';

class QuizList extends Component {

  render() {
    const gridData = [];
    const gridCol = (
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>What Kind of Techie Are You?</Card.Header>
            <Card.Meta>Tech Quizzes</Card.Meta>
            <Card.Description><p>I'm a techie who says what I think...</p></Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color='green'>Take Quiz!</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );

    const gridRow = (
      <Grid.Row>
        {{...gridCol}}
        {{...gridCol}}
        {{...gridCol}}
      </Grid.Row>);

    const rows = [{...gridRow}, {...gridRow}, {...gridRow}];
    return <Grid columns={3}> {rows} </Grid>
  }
}

class QuizTaker extends Component {

  render() {
    return (
      <Container>
        <Segment>
          <Header>
            Take Quiz: Favorite Food
          </Header>
          <Form>
            <Form.Field>
              <label>What is your favorite food?</label>
              <Form.Radio label="Broccoli" value={1}/>
              <Form.Radio label="Pizza" value={2}/>
              <Form.Radio label="Beer" value={3}/>
            </Form.Field>
            <Button basic={true} color={'red'}>Answer!</Button>
          </Form>
        </Segment>

      </Container>
    );
  }

}

export default class QuizGame extends Component {
  render() {
    return (
      <Container>
        <Header>Quizzer</Header>
        <Divider></Divider>
        <h3>Quiz List Prototype</h3>
        <QuizList/>
        <h3>Quiz Take Prototype</h3>
        <QuizTaker></QuizTaker>
      </Container>
    );
  }
}