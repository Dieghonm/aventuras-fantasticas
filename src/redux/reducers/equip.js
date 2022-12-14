import { EQUIP } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case EQUIP:
      if (action.payload[1] === 'remove') {
        const arr = state.filter((item) => item !== action.payload[0])
        return arr
      }
      return [
        ...state,
        ...action.payload,
      ];

  default:
    return state;
  }
};