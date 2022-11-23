import { BOOK } from '../actions';

const initialState = {
  book:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
    return {
      book: action.payload,
    };

  default:
    return state;
  }
};