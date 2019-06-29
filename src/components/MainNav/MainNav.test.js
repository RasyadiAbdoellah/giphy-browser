import React from 'react';
import { shallowLoad } from '../../TestUtils';
import MainNav from './MainNav'; //imports from index.js

//shallow tests
describe('MainNav', () => {
  let dummyProps;
  let component;
  beforeEach(() => {
    dummyProps = {
      apiCall: jest.fn((queryType, term, addParams) => {
        return { queryType, term, addParams };
      })
    };
    component = shallowLoad(MainNav, dummyProps);
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

  it('calls apiCall with queryType search on submit', () => {
    const wrapper = component.find('form');
    const preventDefault = jest.fn(() => {});
    wrapper.simulate('submit', { preventDefault });
    expect(dummyProps.apiCall.mock.calls.length).toEqual(1);
    expect(preventDefault.mock.calls.length).toEqual(1);
    expect(dummyProps.apiCall.mock.calls[0][0]).toEqual('search');
    expect(dummyProps.apiCall.mock.calls[0][1]).toEqual('');
  });

  it('calls apiCall with queryType trending on trending btn click', () => {
    const wrapper = component.find({ children: 'Trending' });
    expect(wrapper.length).toEqual(1);
    wrapper.simulate('click');
    expect(dummyProps.apiCall.mock.calls.length).toEqual(1);
    expect(dummyProps.apiCall.mock.calls[0][0]).toEqual('trending');
  });

  it('calls apiCall with queryType random on trending btn click', () => {
    const wrapper = component.find({ children: 'Random' });
    expect(wrapper.length).toEqual(1);
    wrapper.simulate('click');
    expect(dummyProps.apiCall.mock.calls.length).toEqual(1);
    expect(dummyProps.apiCall.mock.calls[0][0]).toEqual('random');
  });
});
