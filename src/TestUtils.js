import React from 'react';
import { shallow } from 'enzyme';

export function shallowLoad(Component, props = {}) {
  return shallow(<Component {...props} />);
}
