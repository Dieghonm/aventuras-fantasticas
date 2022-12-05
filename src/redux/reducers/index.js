// ./src/redux/index.js
import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import game from './game';
import charms from './charms';

const rootReducer = combineReducers({
  user,
  book,
  game,
  charms,
});

export default rootReducer;
