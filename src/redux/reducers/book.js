import { BOOK, GOTO, GOLD } from '../actions';

const initialState = {
  book:'',
  goTo: 0,
  gold: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
    return {
      ...state,
      book: action.payload,
    };
    case GOTO:
      return {
        ...state,
        goTo: action.payload,
      };
    case GOLD:
      return {
        ...state,
        gold: state.gold + action.payload,
      };

  default:
    return state;
  }
};