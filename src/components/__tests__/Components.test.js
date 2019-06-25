import React from 'react';
import { shallow } from 'enzyme';
import * as comp from '../' //imports all components. component name follows file name

//smoke tests
it('renders without crashing', () => {
    shallow(<comp.GifList/>)
})

it('renders without crashing', () => {
    shallow(<comp.MainNav/>)
})

it('renders without crashing', () => {
    shallow(<comp.GifDetails/>)
})

//mount tests (for gifList behaviour when given data)