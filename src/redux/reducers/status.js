import { STATUS } from '../actions'

const initialState = 'none'

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return state === 'none'? 'block': 'none'
  default:
    return state;
  }
};