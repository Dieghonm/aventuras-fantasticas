// ./src/redux/index.js
import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import game from './game';
import charms from './charms';
import equip from './equip';

const rootReducer = combineReducers({
  user,
  book,
  game,
  charms,
  equip,
});

export default rootReducer;
