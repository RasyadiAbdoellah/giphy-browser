import React from 'react';
import { shallowLoad, mountLoad } from '../../TestUtils';
import GifList from './GifList'; //imports from index.js

describe('GifList', () => {
  //dummy gif prop
  const dummyProps = {
    gifs: [
      {
        id: 'xyz',
        title: 'bla',
        images: {
          fixWidthSmall: {
            webp: 'testWebPURL',
            url: 'testGifURL',
            height: '100px',
            width: '100px'
          },
          fixWidthSmallStill: {
            url: 'testStillURL'
          }
        }
      }
    ],
    select: jest.fn(x => x)
  };

  //shallow test
  it('renders without crashing', () => {
    shallowLoad(GifList, dummyProps);
  });

  //mount test to check children
  describe('displays a GifEntry when provided with an array of gifs', () => {
    //mount component before each test
    let component, source;
    beforeEach(() => {
      component = mountLoad(GifList, dummyProps);
      source = component.find('source');
    });

    //mounts without issue
    it('renders without crashing', () => {});

    //renders children without issue
    it('renders a list of GifEntrys', () => {
      expect(component.exists('GifEntry')).toBe(true);
      expect(component.find('GifEntry')).toContainMatchingElements(1, 'GifEntry');
    });

    //test child specifics
    describe('GifEntry renders gifs', () => {
      //uses webp url
      it('has two source tags', () => {
        expect(component.exists('source')).toBe(true);
        expect(source.length).toEqual(2);
      });
      it('first source tag is webp url', () => {
        expect(source.at(0).prop('srcSet')).toEqual(dummyProps.gifs[0].images.fixWidthSmall.webp);
      });
      it('second source tag is gif url', () => {
        expect(source.at(1).prop('srcSet')).toEqual(dummyProps.gifs[0].images.fixWidthSmall.url);
      });

      //uses gif fallback url
      it('has fallback with valid url', () => {
        const img = component.find('img');
        expect(component.exists('img')).toBe(true);
        expect(img.prop('src')).toEqual(dummyProps.gifs[0].images.fixWidthSmallStill.url);
      });
    });

    //tests if select is called on click
    it('calls select(gifId) when a gif entry is clicked', () => {
      const wrapper = component.find('GifEntry');
      wrapper.simulate('click');
      expect(dummyProps.select.mock.calls.length).toEqual(1);
      expect(dummyProps.select.mock.results[0].value).toEqual(dummyProps.gifs[0].id);
    });

    //cleanup after each test
    afterEach(() => {
      component.unmount();
    });
  });
});
