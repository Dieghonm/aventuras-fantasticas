import { CHARMS } from '../actions';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARMS:
      if (action.payload === 'clean') {
        return { };
      }
      if (typeof action.payload === 'string') {
        return {
          ...state,
          [action.payload]:state[action.payload] - 1
        };
      }
      return {
        ...state,
        ...action.payload,
      };

  default:
    return state;
  }
};