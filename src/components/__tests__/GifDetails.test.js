import React from 'react';
import { shallow } from 'enzyme';
import { GifDetails } from '..'; //imports all components. component name follows file name

//smoke tests
describe('GifDetails', () => {
  //dummy props to pass to component
  const props = {};
  it('renders without crashing', () => {
    shallow(<GifDetails />);
  });
});

//mount tests (for gifList behaviour when given data)
