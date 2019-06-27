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

  //shallow test
  it('renders without crashing', () => {
    shallowLoad(GifList, dummyProps);
  });

  //mount test to check children
  describe('displays a GifEntry when provided with an array of gifs', () => {
    //mount component before each test
    let component;
    beforeEach(() => {
      component = mountLoad(GifList, dummyProps);
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
      //uses mp4 url
      it('has source tag with valid url', () => {
        expect(component.exists('source')).toBe(true);
        const source = component.find('source');
        expect(source.prop('src')).toEqual(dummyProps.gifs[0].images.fixHeightSmall.mp4);
      });

      //uses gif fallback url
      it('has gif fallback with valid url', () => {
        expect(component.exists('img')).toBe(true);
        const img = component.find('img');
        expect(img.prop('src')).toEqual(dummyProps.gifs[0].images.fixHeightSmall.url);
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
