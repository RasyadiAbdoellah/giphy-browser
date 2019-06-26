import React from 'react';
import { shallow, mount } from 'enzyme';

export function shallowLoad(Component, props = {}) {
  return shallow(<Component {...props} />);
}

export function mountLoad(Component, props = {}) {
  return mount(<Component {...props} />);
}
