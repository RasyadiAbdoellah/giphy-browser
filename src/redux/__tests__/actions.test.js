import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as gifAct from '../actions/gif';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('apiCall', () => {
  it('should search for 1 cat gif', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.apiCall('search', 'cats', { limit: 1 })).then(data => {
      const actions = store.getActions();

      expect(actions[0]).toEqual(gifAct.clearGif());
      expect(actions[1]).toEqual(gifAct.isGetting());
      expect(actions[2]).toEqual(gifAct.setReqType('search', 'cats'));
      expect(actions[3].type).toEqual(gifAct.receiveGifs().type);
      expect(actions[3].payload).toBeDefined();
      expect(actions[3].payload.pagination.count).toEqual(1);
    });
  });

  // comment out api key declaration in ../actions/actions.js to run the failed req test below
  // This is only to test what happens on a 400 or 500 response
  xit('should trigger getFail with a bad req', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.apiCall()).then(data => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.getSearch());
      expect(actions[2].type).toEqual(gifAct.getFail().type);
      expect(actions[2].payload).toBeDefined();
    });
  });

  it('getMore should append data', () => {
    const store = mockStore({
      gifs: {
        queryType: 'search',
        queryStr: 'cats',
        pagination: { offset: 0, count: 1 }
      }
    });
    store.dispatch(gifAct.getMore()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.clearGif());
      expect(actions[1]).toEqual(gifAct.isAppend());
      expect(actions[1].type).toEqual(gifAct.appendGifs().type);
      expect(actions[1].payload.pagination.offset).toEqual(1);
    });
  });
  it('should get 1 gif from trending', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.apiCall('trending', null, { limit: 1 })).then(data => {
      const actions = store.getActions();

      expect(actions[0]).toEqual(gifAct.clearGif());
      expect(actions[1]).toEqual(gifAct.isGetting());
      expect(actions[2]).toEqual(gifAct.setReqType('trending', null));
      expect(actions[3].type).toEqual(gifAct.receiveGifs().type);
      expect(actions[3].payload).toBeDefined();
      expect(actions[3].payload.pagination.count).toBe(1);
    });
  });
});
