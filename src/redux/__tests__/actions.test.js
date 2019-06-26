import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as gifAct from '../actions/gif';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('reqGifSearch', () => {
  it('should search for 1 cat gif', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.reqGifSearch('cats', null, { limit: 1 })).then(data => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.getSearch());
      expect(actions[1].type).toEqual(gifAct.receiveGifs().type);
      expect(actions[1].payload).toBeDefined();
      expect(actions[1].payload.pagination.count).toBe(1);
    });
  });

  it('should trigger getFail with a bad req', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.reqGifSearch()).then(data => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.getSearch());
      expect(actions[1].type).toEqual(gifAct.getFail().type);
      expect(actions[1].payload).toBeDefined();
    });
  });
});

describe('reqGifTrending', () => {
  it('should get 1 gif from trending', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.reqGifTrending(null, { limit: 1 })).then(data => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.getTrending());
      expect(actions[1].type).toEqual(gifAct.receiveGifs().type);
      expect(actions[1].payload).toBeDefined();
      expect(actions[1].payload.pagination.count).toBe(1);
    });
  });

  // comment out api key declaration in ../actions/actions.js to run the failed req test below
  // delete the 'x' from 'xit' to unskip test
  xit('should trigger getFail with a bad req', () => {
    const store = mockStore({});
    return store.dispatch(gifAct.reqGifTrending(null)).then(data => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(gifAct.getTrending());
      expect(actions[1].type).toEqual(gifAct.getFail().type);
      expect(actions[1].payload).toBeDefined();
    });
  });
});
