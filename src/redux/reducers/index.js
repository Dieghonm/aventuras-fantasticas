// ./src/redux/index.js
import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import game from './game';

const rootReducer = combineReducers({
  user,
  book,
  game,
});

export default rootReducer;
