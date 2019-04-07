import { CORRECT_GUESS } from '../actions/types';

export default (state = false, action) => {
  if (action.type === CORRECT_GUESS) {
    return action.payload;
  } else {
    return state;
  }
}