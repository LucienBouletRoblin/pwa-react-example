import * as types from "./types";

const initialState = {
  home: [],
  createdPost: {},
  creatingPost: false,
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
    case types.CREATE: {
      return {
        ...state,
        creatingPost: true
      };
    }
    case types.CREATE_SUCCESS: {
      return {
        ...state,
        creatingPost: false,
        createdPost: action.payload
      };
    }
    case types.CREATE_ERROR: {
      return {
        ...state,
        creatingPost: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
