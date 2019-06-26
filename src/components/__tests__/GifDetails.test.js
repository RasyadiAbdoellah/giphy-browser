import React from 'react';
import { shallowLoad } from '../../TestUtils';
import { GifDetails } from '..'; //imports from index.js

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
