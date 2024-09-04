// reducers/index.js
import { combineReducers } from 'redux';
import todoReducer from '../services/todo/reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
