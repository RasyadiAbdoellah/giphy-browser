import * as gifAct from '../gifActionTypes';

const initialState = {
  isGetting: false,
  isSearch: false,
  isTrending: false,
  getSuccess: false,
  getFailed: false,
  errorMessage: '',
  allIds: [],
  byId: {},
  selectedId: ''
};

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
      const { data } = action.payload;
      if (data && typeof data !== 'string') {
        const dataIds = data.map(gif => gif.id); //need to check gif data structure
        const gifsById = {};

        data.forEach(gif => {
          const {
            url,
            bitly_gif_url,
            bitly_url,
            title,
            id,
            embed_url,
            user,
            images: { fixed_height_still, fixed_height_small, original }
          } = gif;
          const urls = { url, bitly_gif_url, bitly_url, embed_url };
          const images = {
            fixHeightStill: fixed_height_still,
            fixHeightSmall: fixed_height_small,
            original
          };
          gifsById[gif.id] = { urls, id, title, user, images }; //may need to clean res before sending to this step
        });
        return Object.assign({}, state, {
          isGetting: false,
          getSuccess: true,
          isSearch: false,
          isTrending: false,
          allIds: dataIds,
          byId: gifsById
        });
      } else {
        return Object.assign({}, state, {
          isGetting: false,
          getFailed: true,
          isSearch: false,
          isTrending: false,
          errorMessage: action.payload // This is to capture if a 200 is sent but nothing is there.
        });
      }
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
    case gifAct.selectGif: {
      return Object.assign({}, state, { selectedId: action.payload });
    }
    default:
      return state;
  }
}
