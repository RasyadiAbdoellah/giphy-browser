import { initialState } from './gif';
import reducer from './gif';

describe('Gif reducer', () => {
  it('returns initialState when passed no state, and bad action', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
