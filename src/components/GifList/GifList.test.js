import React from 'react';
import { shallowLoad, mountLoad } from '../../TestUtils';
import GifList from './GifList'; //imports from index.js

describe('GifList', () => {
  const dummyProps = {
    gifs: [
      {
        id: 'xyz',
        title: 'bla',
        images: {
          fixHeightSmall: {
            mp4:
              'https://media1.giphy.com/media/l3fzM2wgd6TygHbYA/100.mp4?cid=fedd91645d143eb3316b526859d10201&rid=100.mp4',
            url:
              'https://media1.giphy.com/media/l3fzM2wgd6TygHbYA/100.gif?cid=fedd91645d143eb3316b526859d10201&rid=100.gif'
          }
        }
      }
    ],
    select: jest.fn(x => x)
  };
  //shallow tests
  it('renders without crashing', () => {
    shallowLoad(GifList, dummyProps);
  });

  //mount tests
  describe('It displays a GifEntry when provided with an array of gifs', () => {
    let component;
    beforeEach(() => {
      component = mountLoad(GifList, dummyProps);
    });
    it('renders without crashing', () => {});
    it('renders a list of GifEntrys', () => {
      expect(component.exists('GifEntry')).toBe(true);
      expect(component.find('GifEntry')).toContainMatchingElements(1, 'GifEntry');
    });
    describe('GifEntry shows gifs', () => {
      it('has source tag with valid url', () => {
        expect(component.exists('source')).toBe(true);
        const source = component.find('source');
        expect(source.prop('src')).toEqual(dummyProps.gifs[0].images.fixHeightSmall.mp4);
      });
      it('has gif fallback with valid url', () => {
        expect(component.exists('img')).toBe(true);
        const img = component.find('img');
        expect(img.prop('src')).toEqual(dummyProps.gifs[0].images.fixHeightSmall.url);
      });
    });
  });
});
