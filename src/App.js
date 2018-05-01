import React, { Component } from 'react';
import './App.css';
import * as axios from 'axios';
import Quizzer from "./react-only/Quizzer";
import store from './react-and-redux/recipe-store';

class App extends Component {
  constructor(props) {
      super(props);
      console.dir(store);
  }

  componentDidMount() {
    axios.get('quizzes.json')
      .then(payload => {
        this.setState({ quizzes: payload.data });
      });
  }

  render() {
    if (this.state && this.state.quizzes) {
      return <Quizzer quizzes={this.state.quizzes}/>;
    } else {
      return <p>please wait...</p>
    }
  }
}

export default App;
