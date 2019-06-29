import * as gifAct from '../gifActionTypes';

//exported for testing
export const initialState = {
  isGetting: false,
  isAppending: false,
  getSuccess: false,
  getFailed: false,
  errorMessage: '',
  allIds: [],
  byId: {},
  selectedId: null,
  curPage: 0,
  queryStr: '',
  queryType: '',
  pagination: {}
};

//Function to be called in forEach in processRes.
//Returns new gifObj with just the important bits
function extractGifData(gif) {
  //extract urls
  const { url, bitly_gif_url, bitly_url, embed_url } = gif;
  //set to new object
  const urls = { url, bitlyGifUrl: bitly_gif_url, bitlyUrl: bitly_url, embedUrl: embed_url };

  //extract objects from images
  const {
    images: {
      fixed_height_small,
      fixed_height_small_still,
      fixed_width_small,
      fixed_width_small_still,
      original
    }
  } = gif;
  //set to new object with camelCase name
  const images = {
    fixWidthSmall: fixed_width_small,
    fixWidthSmallStill: fixed_width_small_still,
    original
  };

  //extract other important info
  const { title, id, user } = gif;

  return { title, id, user, urls, images };
}

//Processes response into usable data, used in receiveGifs, appendGifs, and randomGif
function processRes(payload, state, shouldAppend = false) {
  let allIds,
    byId = {};
  const { data, pagination } = payload;
  if (data && typeof data !== 'string') {
    if (Array.isArray(data)) {
      if (!shouldAppend) {
        allIds = [...data.map(gif => gif.id)];
      } else {
        allIds = [...state.allIds, ...data.map(gif => gif.id)];
        byId = { ...state.byId };
      }

      //transform data to what is needed
      data.forEach(gif => {
        byId[gif.id] = extractGifData(gif);
      });
    } else {
      console.log(data);
      allIds = [data.id];
      byId[data.id] = extractGifData(data);
    }
    return Object.assign({}, state, {
      isGetting: false,
      isAppending: false,
      getSuccess: true,
      allIds,
      byId,
      pagination: pagination
    });
  } else {
    return Object.assign({}, state, {
      isGetting: false,
      isAppending: false,
      getFailed: true,
      errorMessage: payload // This is to capture if a 200 is sent but nothing is there.
    });
  }
}

// reducer function below
export default function(state = initialState, action) {
  switch (action.type) {
    case gifAct.isGetting: {
      return Object.assign({}, state, {
        isGetting: true,
        getSuccess: false,
        getFailed: false
      });
    }

    case gifAct.queryType: {
      return Object.assign({}, state, {
        queryType: action.payload.type,
        queryStr: action.payload.query
      });
    }
    case gifAct.getSuccess: {
      return processRes(action.payload, state);
    }
    case gifAct.isAppend: {
      return Object.assign({}, state, {
        isAppending: true,
        getSuccess: false,
        getFailed: false
      });
    }
    case gifAct.appendSuccess: {
      return processRes(action.payload, state, true);
    }
    case gifAct.getFail: {
      return Object.assign({}, state, {
        isGetting: false,
        getFailed: true,
        errorMessage: action.payload //Will need to doublecheck this
      });
    }
    case gifAct.selectGif: {
      return Object.assign({}, state, { selectedId: action.payload });
    }
    case gifAct.clearGif: {
      return Object.assign({}, state, { selectedId: null });
    }
    default:
      return state;
  }
}
