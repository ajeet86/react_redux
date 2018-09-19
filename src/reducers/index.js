import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import StudentReducer from './student_list';


const rootReducer = combineReducers({
  books: BookReducer,
  students:StudentReducer
});

export default rootReducer;
