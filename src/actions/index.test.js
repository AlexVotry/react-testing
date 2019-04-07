import { correctGuess } from './index';
import { CORRECT_GUESS } from './types';

describe('corrrectGuress', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS, payload: true });
  })
}) 