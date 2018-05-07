import React, { Component } from 'react';
import './App.css';

// TO TRY EACH SOLUTION - UNCOMMENT IT AS
// THE "QuizGame" COMPONENT

//import QuizGame from './prototype/QuizGame';
//import QuizGame from './react-only/QuizGame';
//import QuizGame from './react-and-redux/QuizGame';
import QuizGame from './react-redux-router/QuizGame';

class App extends Component {

  render() {
      return <QuizGame />
  }
}

export default App;
