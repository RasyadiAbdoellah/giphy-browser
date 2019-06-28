import * as actions from '../gifActionTypes';

import giphyClient from 'giphy-js-sdk-core';

// comment out api key and uncomment empty giphyClient to test fail actions
const client = giphyClient('2D5gTVuhBIQ2BLkOaKpPS9REFTTUuHMY');
// const client = giphyClient();

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

export function appendGifs(response) {
  return {
    type: actions.isAppend,
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

export function setReqType(type, query = null) {
  return {
    type: actions.queryType,
    payload: { type, query }
  };
}

// REQUEST TO API IS DONE HERE

// decider is a helper function that determines if receiveGif should be passed with an append action
function decider(dispatch, addParams, res) {
  if (addParams.offset) {
    dispatch(appendGifs(res));
  } else {
    dispatch(receiveGifs(res));
  }
}

export function reqGifSearch(query, addParams = {}) {
  return function(dispatch) {
    if (!addParams.offset) {
      dispatch(getSearch());
    }
    return client
      .search('gifs', { q: query, ...addParams })
      .then(res => {
        //if offset is provided this means its a req to load more gifs
        decider(dispatch, addParams, res);
        dispatch(setReqType('search', query));
        return res;
      })
      .catch(err => {
        console.log(err);
        dispatch(getFail(err));
        dispatch(setReqType('failed'));
        return err;
      });
  };
}

export function reqGifTrending(addParams = {}) {
  return function(dispatch) {
    if (!addParams.offset) {
      dispatch(getTrending());
    }
    return client
      .trending('gifs', addParams)
      .then(res => {
        decider(dispatch, addParams, res);
        dispatch(setReqType('trending'));
        return res;
      })
      .catch(err => {
        console.log(err);
        dispatch(getFail(err));
        dispatch(setReqType('failed'));
        return err;
      });
  };
}

export function getMore() {
  return async function(dispatch, getState) {
    const {
      gifs: { queryType, queryStr, pagination }
    } = getState();
    const newOffset = { offset: pagination.offset + pagination.count };
    if (queryType === 'search') {
      return await dispatch(reqGifSearch(queryStr, newOffset));
    }

    if (queryType === 'trending') {
      return await dispatch(reqGifTrending(newOffset));
    }
  };
}

export function selectGif(id) {
  return {
    type: actions.selectGif,
    payload: id
  };
}
