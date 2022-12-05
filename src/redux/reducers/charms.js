import { CHARMS } from '../actions';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARMS:
      return {
        ...state,
        ...action.payload,
      };

  default:
    return state;
  }
};