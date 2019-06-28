import * as actions from '../gifActionTypes';

import giphyClient from 'giphy-js-sdk-core';
//switch apiCall to use axios due to giphyClient being finnicky
import Axios from 'axios';
const axios = Axios.create({ baseURL: 'https://api.giphy.com/v1/gifs/' });
const API_KEY = '2D5gTVuhBIQ2BLkOaKpPS9REFTTUuHMY';
const baseParams = { api_key: API_KEY, rating: 'g' }; //base params are so all queries return g rated gifs

//all actions are exported for testing purposes

//---------------------------------SYNCHRONOUS ACTIONS-------------------------------------------

//--------------------------------API REQ STATUS ACTIONS-----------------------------------------

export function isGetting() {
  //dispatched at start of req process
  return { type: actions.isGetting };
}

export function isAppend() {
  //dispatched at start of load more process
  return { type: actions.isAppend };
}

export function setReqType(type, query = null) {
  //dispatched after req is sent. saves the query type ans search term for getMore (pagination)
  return {
    type: actions.queryType,
    payload: { type, query }
  };
}

export function receiveGifs(response) {
  //called on success. sends response over and flips IS_GETTING, IS_SEARCH, and IS_TRENDING to false
  return {
    type: actions.getSuccess,
    payload: response
  };
}

export function appendGifs(response) {
  //also called on success, but action type is append
  return {
    type: actions.appendSuccess,
    payload: response
  };
}

export function getFail(error) {
  //called on error. sends error over and flips IS_FAIL
  return {
    type: actions.getFail,
    payload: error
  };
}

//--------------------------------------GIF SELECT ACTIONS --------------------------------
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
//-------------------------------------------------------------------------------------------

//--------------------ASYNC ACTIONS USING THUNK------------------------------------------------
export function apiCall(queryType, query = null, addParams = {}) {
  // apiCall dispatchs synchronous actions based on what type of request is being made. This is used for only search and trending
  console.log(queryType);
  return async function(dispatch) {
    if (!addParams.offset) {
      dispatch(clearGif());
      dispatch(isGetting());
    } else {
      dispatch(isAppend());
    }

    try {
      const res = await axios(queryType, { params: { q: query, ...baseParams, ...addParams } });

      // with giphClient the req looks like: client[queryType]('gifs', { q: query, ...baseParams, ...addParams });
      // console.log(res);
      dispatch(setReqType(queryType, query));
      resDecider(dispatch, addParams, res.data);
      if (queryType === 'random') {
        dispatch(selectGif(res.data.data.id));
      }
      //if offset is provided this means its a req to load more gifs
      return res;
    } catch (err) {
      console.log(err);
      dispatch(getFail(err));
      dispatch(setReqType('failed'));
      return err;
    }
  };
}

export function getMore() {
  //get more is used to get more results. uses latest response offset + res count to create new offset
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

//-----------------------------API REQUEST HELPER FUNCTION-------------------------------------------

function resDecider(dispatch, addParams = {}, res) {
  // decider is a helper function that determines if receiveGif should be passed with an append action
  if (!addParams || !addParams.offset) {
    dispatch(receiveGifs(res));
  } else {
    dispatch(appendGifs(res));
  }
}
