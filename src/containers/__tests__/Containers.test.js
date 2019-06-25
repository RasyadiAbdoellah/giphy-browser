import React from 'react';
import { shallow } from 'enzyme';

import * as rx from '../';

import {Details} from '../'
import {Main} from '../'


//smoke tests
it('renders without crashing', () => {
  shallow(<Details/>)
});

it('renders without crashing', () => {
  shallow(<Main />)
})