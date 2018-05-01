import React, { Component } from 'react';
import './App.css';
import * as axios from 'axios';
import QuizGame from "./react-only/QuizGame";

class App extends Component {

  componentDidMount() {
    axios.get('quizzes.json')
      .then(payload => {
        this.setState({ quizzes: payload.data });
      });
  }

  render() {
    if (this.state && this.state.quizzes) {
      return <QuizGame quizzes={this.state.quizzes}/>;
    } else {
      return <p>please wait...</p>
    }
  }
}

export default App;
