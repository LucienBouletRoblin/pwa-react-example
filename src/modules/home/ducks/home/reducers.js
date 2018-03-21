import * as types from "./types";

const initialState = {
  home: [],
  postCreated: false,
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
        postCreated: false,
        creatingPost: true
      };
    }
    case types.CREATE_SUCCESS: {
      return {
        ...state,
        postCreated: true,
        creatingPost: false
      };
    }
    case types.CREATE_ERROR: {
      return {
        ...state,
        postCreated: false,
        creatingPost: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
