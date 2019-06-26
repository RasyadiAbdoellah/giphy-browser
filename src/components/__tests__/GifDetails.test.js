import React from 'react';
import { shallowLoad } from '../../TestUtils';
import { GifDetails } from '..'; //imports all components. component name follows file name

//shallow tests
describe('GifDetails', () => {
  let component;
  //dummy props to pass to component
  const props = {};
  beforeEach(() => {
    component = shallowLoad(GifDetails);
  });

  it('renders without crashing', () => {});
});

//mount tests (for gifList behaviour when given data)
