import * as types from "./types";

const initialState = {
  home: [],
  loadingHomeStuffs: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL: {
      return {
        ...state,
        loadingHomeStuffs: true
      };
    }
    case types.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        loadingHomeStuffs: false,
        home: action.payload
      };
    }
    case types.FETCH_ALL_ERROR: {
      return {
        ...state,
        loadingHomeStuffs: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
