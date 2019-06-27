import * as gifAct from '../gifActionTypes';

//exported for testing
export const initialState = {
  isGetting: false,
  isSearch: false,
  isTrending: false,
  getSuccess: false,
  getFailed: false,
  errorMessage: '',
  allIds: [],
  byId: {},
  selectedId: '',
  curPage: 0,
  queryStr: '',
  reqType: '',
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

//Processes response into usable data, used in both receiveGifs and appendGifs
function processRes(payload, state, shouldAppend = false) {
  let allIds, byId;
  const { data, pagination } = payload;
  if (data && typeof data !== 'string') {
    if (!shouldAppend) {
      allIds = data.map(gif => gif.id);
      byId = {};
    } else {
      console.log(state);
      allIds = [...state.allIds, ...data.map(gif => gif.id)];
      byId = { ...state.byId };
    }

    //transform data to what is needed
    data.forEach(gif => {
      byId[gif.id] = extractGifData(gif);
    });

    return Object.assign({}, state, {
      isGetting: false,
      getSuccess: true,
      isSearch: false,
      isTrending: false,
      allIds,
      byId,
      pagination: pagination
    });
  } else {
    return Object.assign({}, state, {
      isGetting: false,
      getFailed: true,
      isSearch: false,
      isTrending: false,
      errorMessage: payload // This is to capture if a 200 is sent but nothing is there.
    });
  }
}

// reducer function below
export default function(state = initialState, action) {
  switch (action.type) {
    case gifAct.isGetSearch: {
      return Object.assign({}, state, {
        isGetting: true,
        isSearch: true,
        getSuccess: false,
        getFailed: false
      });
    }
    case gifAct.isGetTrending: {
      return Object.assign({}, state, {
        isGetting: true,
        isTrending: true,
        getSuccess: false,
        getFailed: false
      });
    }
    case gifAct.getSuccess: {
      return processRes(action.payload, state);
    }
    case gifAct.isAppend: {
      return processRes(action.payload, state, true);
    }
    case gifAct.getFail: {
      return Object.assign({}, state, {
        isGetting: false,
        getFailed: true,
        isSearch: false,
        isTrending: false,
        errorMessage: action.payload //Will need to doublecheck this
      });
    }
    case gifAct.reqType: {
      return Object.assign({}, state, {
        reqType: action.payload.type,
        queryStr: action.payload.query
      });
    }
    case gifAct.selectGif: {
      return Object.assign({}, state, { selectedId: action.payload });
    }
    case gifAct.clearGif: {
      return Object.assign({}, state, { selectedId: '' });
    }
    default:
      return state;
  }
}
