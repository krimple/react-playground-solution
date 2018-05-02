import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

const logger = createLogger();

// actions
const LOAD_QUIZ_DATA = 'reducers/quiz/LOAD_QUIZ_DATA';
const LOAD_ANSWER_DATA = 'reducers/quiz/LOAD_ANSWER_DATA';
const TAKE_QUIZ = 'reducers/quiz/TAKE_QUIZ';
const END_QUIZ = 'reducers/quiz/END_QUIZ';
const ANSWER_QUESTIONS = 'reducers/quiz/ANSWER_QUESTIONS';

const initialState = {
  answers: []
};

export const loadQuizzes = () => (dispatch) => {
  axios.get('quizzes')
    .then(payload => {
      dispatch({
        type: LOAD_QUIZ_DATA,
        payload: payload.data
      });
    })
    .then(() => {
      return axios.get('answers');
    })
    .then(
      payload => {
        dispatch({
          type: LOAD_ANSWER_DATA,
          payload: payload.data
        });
      },
      (payload) => {
        console.log('WARNING - NO DATA FOR ANSWERS YET', payload);
        dispatch({
          type: LOAD_ANSWER_DATA,
          payload: []
        });
      });
};

export const takeQuiz = (quiz) => {
  return {
    type: TAKE_QUIZ,
    payload: {
      quiz: quiz
    }
  };
};

export const endQuiz = () => {
  return {
    type: END_QUIZ
  }
};

export const answerQuestions = (playerName, answers) => (dispatch) => {
  axios.post('answers', { player: playerName, answers: answers })
    .then(dispatch({
      type: ANSWER_QUESTIONS,
      payload: {
        answers: answers,
        player: playerName,
        date: new Date().toISOString()
      }
    }));
};

function reducer (state, action) {
  switch(action.type) {
    case LOAD_QUIZ_DATA:
      return {
        ...state,
        quizzes: action.payload
      };
    case LOAD_ANSWER_DATA:
      return {
        ...state,
        answers: action.payload
      };
    case TAKE_QUIZ:
      return {
        ...state,
        dialogOpen: true,
        quiz: action.payload.quiz
      };
    case END_QUIZ:
      return {
        ...state,
        dialogOpen: false,
        quiz: null
      };
    case ANSWER_QUESTIONS:
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            quizId: state.quiz.id,
            answers: action.payload.answers,
            player: action.payload.player,
            date: action.payload.date
          }
        ]
      }
      default: return state;
  }
};

const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk, logger));

export default store;
