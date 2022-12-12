import { EQUIP } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case EQUIP:
      console.log(action);
      return [
        ...state,
        ...action.payload,
      ];

  default:
    return state;
  }
};