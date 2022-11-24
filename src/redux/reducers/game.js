import { ATTRIBUTES } from '../actions';

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTRIBUTES:
      if(action.payload === 'clean') {
        return {}
      }
      if (action.payload[1] !== 0) {
        return {
          ...state,
          [action.payload[0]]: action.payload[1],
        };
      }
    return state
  default:
    return state;
  }
};