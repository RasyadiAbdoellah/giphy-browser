import * as actions from '../gifActionTypes';

const initialState = {
  isGetting: false,
  isSearch: false,
  isTrending: false,
  getSuccess: false,
  getFailed: false,
  errorMessage: '',
  allIds: [],
  byId: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.isGetSearch: {
      return Object.assign({}, state, {
        isGetting: true,
        isSearch: true,
        getSuccess: false,
        getFailed: false
      });
    }
    case actions.isGetTrending: {
      return Object.assign({}, state, {
        isGetting: true,
        isTrending: true,
        getSuccess: false,
        getFailed: false
      });
    }
    case actions.getSuccess: {
      const { data } = action.payload;
      if (data && typeof data !== 'string') {
        const dataIds = data.map(gif => gif.id); //need to check gif data structure
        const gifsById = {};

        data.forEach(gif => {
          gifsById[gif.id] = { ...gif }; //may need to clean res before sending to this step
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
    case actions.getFail: {
      return Object.assign({}, state, {
        isGetting: false,
        getFailed: true,
        isSearch: false,
        isTrending: false,
        errorMessage: action.payload //Will need to doublecheck this
      });
    }
    default:
      return state;
  }
}
