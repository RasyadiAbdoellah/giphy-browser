
import {
  IS_GETTING, GET_SUCCESS, GET_FAILED
} from '../gifActionTypes';

//getGifs switches the isGetting flag in the redux store to true
//getGifs is called within the main get action getAllGifs so it does not need to be exported.
function sendReq() {
  return {
    type: IS_GETTING
  };
}

//
function receiveGifs(response) {
  return {
    type: GET_SUCCESS,
    payload: response,
  };
}

function getFail(error){
  return {
    type: GET_FAILED
  }
}

export function getGifs() {
  return function(dispatch) {
    dispatch(sendReq());
    // send search req to giphy using SDK
    // .then dispatch(receiveGifs(res))
    //.catch dispatch(getFail(error))
  }
}

