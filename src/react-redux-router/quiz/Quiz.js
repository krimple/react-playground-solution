import React, {Fragment} from 'react';
import QuizList from './QuizList';
import QuizDialog from './quizForm/QuizDialog';

const Quiz = (props) => {
 return <Fragment>
   <QuizList />
   <QuizDialog />
 </Fragment>;
};

export default Quiz;