import React from 'react';
import { shallow } from 'enzyme';
import { MainNav } from '..'; //imports all components. component name follows file name

//smoke tests
describe('MainNav', () => {
  it('renders without crashing', () => {
    shallow(<MainNav />);
  });
});

//mount tests (for gifList behaviour when given data)
