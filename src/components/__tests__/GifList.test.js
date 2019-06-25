import React from 'react';
import { shallow } from 'enzyme';
import { GifList } from '..'; //imports all components. component name follows file name

//smoke tests
describe('GifList', () => {
  it('renders without crashing', () => {
    shallow(<GifList />);
  });
});

//mount tests (for gifList behaviour when given data)
