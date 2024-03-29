import { LOGIN } from '../actions';

const initialState = {
  email: '',
  user: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    return {
      email: action.payload.email,
      user: action.payload.user,
    };

  default:
    return state;
  }
};
