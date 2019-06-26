import React from 'react';
import { shallowLoad } from '../../TestUtils';
import { MainNav } from '..'; //imports from index.js

//shallow tests
describe('MainNav', () => {
  let component;
  beforeEach(() => {
    component = shallowLoad(MainNav);
  });
  it('renders without crashing', () => {});
  it('renders a text input ', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('changes state on input change', () => {
    const wrapper = component.find('input');
    const newVal = 'something';
    wrapper.simulate('change', { target: { value: newVal } });
    expect(component.state('value')).toEqual(newVal);
  });
});
