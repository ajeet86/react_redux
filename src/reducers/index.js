import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import StudentReducer from './student_list';
import Activebook from './reducer_activebook';
import Activestudent from './reducer_activestudent';


const rootReducer = combineReducers({
  books: BookReducer,
  students:StudentReducer,
  activebook:Activebook,
  activestudent:Activestudent

});

export default rootReducer;
