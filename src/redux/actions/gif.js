import * as actions from '../gifActionTypes';

import giphyClient from 'giphy-js-sdk-core';

// comment out api key and uncomment empty giphyClient to test fail actions
const client = giphyClient('2D5gTVuhBIQ2BLkOaKpPS9REFTTUuHMY');
// const client = giphyClient();

//all actions are exported for testing purposes

export function isGetting() {
  return { type: actions.isGetting };
}
//dispatched when getting more
export function isAppend() {
  return { type: actions.isAppend };
}

//called on success. sends response over and flips IS_GETTING, IS_SEARCH, and IS_TRENDING to false
export function receiveGifs(response) {
  return {
    type: actions.getSuccess,
    payload: response
  };
}
//also called on success, but action type is append
export function appendGifs(response) {
  return {
    type: actions.appendSuccess,
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

export function apiCall(queryType, query = null, addParams = {}) {
  console.log(queryType);
  return async function(dispatch) {
    if (!addParams.offset) {
      dispatch(isGetting());
    } else {
      dispatch(isAppend());
    }

    dispatch(setReqType(queryType, query));
    try {
      const res = client[queryType]('gifs', { q: query, ...addParams }).then(res => {
        decider(dispatch, addParams, res);
        //if offset is provided this means its a req to load more gifs
        return res;
      });
    } catch (err) {
      console.log(err);
      dispatch(getFail(err));
      dispatch(setReqType('failed'));
      return err;
    }
  };
}

export function reqGifRandom() {
  return async dispatch => {
    return;
  };
}
export function getMore() {
  return async function(dispatch, getState) {
    let {
      gifs: { queryType, queryStr, pagination }
    } = getState();
    const newOffset = { offset: pagination.offset + pagination.count };
    if (queryType === 'trending') {
      queryStr = null;
    }
    return await dispatch(apiCall(queryType, queryStr, newOffset));
  };
}

export function clearGif() {
  return { type: actions.clearGif };
}

export function selectGif(id) {
  return dispatch => {
    dispatch(clearGif());
    return dispatch({
      type: actions.selectGif,
      payload: id
    });
  };
}
