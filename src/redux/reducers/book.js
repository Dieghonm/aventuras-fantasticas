import { BOOK, GOTO } from '../actions';

const initialState = {
  book:'',
  goTo: 0
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

  default:
    return state;
  }
};