import { initialState } from '../reducers/gif';
import reducer from '../reducers/gif';

describe('Gif reducer', () => {
  it('returns initialState when passed no state, and bad action', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
