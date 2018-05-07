import React, {Component} from 'react';
import {Container, Header, Divider, Menu} from 'semantic-ui-react';
import Quiz from './quiz/Quiz';
import QuizResultList from './quizResults/QuizResultList';

import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Link, Route, Redirect, Router, Switch} from 'react-router-dom';


import * as actionCreators from './quiz-store';

import store from './quiz-store';

const history = createHistory();

store.dispatch(actionCreators.loadQuizzes());
// fire up the opening gambit

export default class QuizGame extends Component {

  state = {
    activeMenuItem: ''
  };

  handleTakeQuiz = (quiz) => {
    this.props.dispatch(actionCreators.takeQuiz(quiz));
  };

  handleNavMenuClick = (e, {name}) => this.setState({activeMenuItem: name});

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Container>
            <Menu vertical>
              <Menu.Item name='quiz'
                         active={this.state.activeMenuItem === 'quiz'}
                         link
                         onClick={this.handleNavMenuClick}>
                <Link to="/quiz">Quiz</Link>
              </Menu.Item>
              <Menu.Item name='quiz-results'
                         active={this.state.activeMenuItem === 'quiz-results'}
                         link
                         onClick={this.handleNavMenuClick}>
                <Link to="/answers">Answers</Link>
              </Menu.Item>
            </Menu>
            <Header>Quizzer</Header>
            <Divider/>
          <Switch>
            <Route path="/quiz" strict={true} exact={true} component={Quiz} />
            <Route path="/answers" strict={true} exact={true} component={QuizResultList} />
          </Switch>
          </Container>

        </Router>
      </Provider>
    );
  }
}
