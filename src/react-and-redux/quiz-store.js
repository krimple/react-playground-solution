import { createStore } from 'redux';
import axios from 'axios';

// actions
const LOAD_QUIZ_DATA = 'reducers/quiz/LOAD_QUIZ_DATA';

export const loadQuizzes = (dispatch) => {
  axios.get('quizzes.json')
    .then(payload => {
      dispatch({
        type: LOAD_QUIZ_DATA,
        payload: payload.data
      });
    });

};

const reducer = (state, action) => {
  switch(action.type) {
    case LOAD_QUIZ_DATA:
      return {
        ...state,
        quizzes: payload
      };
    default: return state;
  }
};

export default createStore(reducer);
