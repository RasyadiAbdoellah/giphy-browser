import * as actions from '../gifActionTypes';

import giphyClient from 'giphy-js-sdk-core';

// comment out api key and uncomment empty giphyClient to test fail actions
const client = giphyClient('2D5gTVuhBIQ2BLkOaKpPS9REFTTUuHMY');
// const client = giphyClient();

// import axios from '../../axios';

//all actions are exported for testing purposes

//getSearch will switch IS_GETTING and IS_SEARCH to true
export function getSearch() {
  return { type: actions.isGetSearch };
}

//getTrending will switch IS_GETTING and IS_TRENDING to true
export function getTrending() {
  return { type: actions.isGetTrending };
}

//called on success. sends response over and flips IS_GETTING, IS_SEARCH, and IS_TRENDING to false
export function receiveGifs(response) {
  return {
    type: actions.getSuccess,
    payload: response
  };
}

//called on error. sends error over and flips IS_FAIL
export function getFail(error) {
  return {
    type: actions.getFail,
    payload: error
  };
}

export function reqGifSearch(query, page = 0, addParams) {
  return function(dispatch) {
    const params = { q: query, offset: page * 25, ...addParams };
    dispatch(getSearch());
    return client
      .search('gifs', params)
      .then(res => {
        // console.log(res);
        dispatch(receiveGifs(res));
        return res;
      })
      .catch(err => {
        // console.log(err);
        dispatch(getFail(err));
        return err;
      });
  };
}

export function reqGifTrending(page = 0, addParams) {
  return function(dispatch) {
    const params = { offset: page * 25, ...addParams };
    dispatch(getTrending());
    return client
      .trending('gifs', params)
      .then(res => {
        // console.log(res);
        dispatch(receiveGifs(res));
        return res;
      })
      .catch(err => {
        // console.log(err);
        dispatch(getFail(err));
        return err;
      });
  };
}
