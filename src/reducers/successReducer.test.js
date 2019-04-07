import successReducer from './successReducer';
import { CORRECT_GUESS } from '../actions/types';

describe('successReducer', () => {
  test('returns default of false when no action is called', () => {
    const defaultState = { type: "goofy", payload: true };
    const newState = successReducer(undefined, defaultState);
    expect(newState).toBe(false);
  });

  test('returns true if "CORRECT_GUESS" ', () => {
    const action = { type: CORRECT_GUESS, payload: true }
    const newState = successReducer(undefined, action);
    expect(newState).toBe(true);
  });
})
