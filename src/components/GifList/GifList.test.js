import React from 'react';
import { shallowLoad } from '../../TestUtils';
import GifList from './GifList'; //imports from index.js

//shallow tests
describe('GifList', () => {
  describe('on a successful req', () => {
    let component;
    const dummyProps = { gifs: [{ title: 'bla' }] };
    beforeEach(() => {
      component = shallowLoad(GifList, dummyProps);
    });
    it('renders without crashing', () => {});
    it('renders a list of GifCards', () => {
      expect(component.exists('GifCard')).toBe(true);
      expect(component.exists('[data-test="fail-message"]')).toBe(false);
    });
  });

  describe('on a failed req', () => {
    let component;
    const dummyProps = { getFail: true };
    beforeEach(() => {
      component = shallowLoad(GifList, dummyProps);
    });
    it('renders without crashing', () => {});
    it('renders a list of GifCards', () => {
      expect(component.exists('GifCard')).toBe(false);
      expect(component.exists('[data-test="fail-message"]')).toBe(true);
    });
  });
});

//mount tests (for gifList behaviour when given data)
