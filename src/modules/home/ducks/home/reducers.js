import * as types from "./types";

const initialState = {
  home: [],
  postCreated: false,
  creatingPost: false,
  postUpdated: false,
  updatingPost: false,
  postDeleted: false,
  deletingPost: false,
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
    case types.UPDATE: {
      return {
        ...state,
        postUpdated: false,
        updatingPost: true
      };
    }
    case types.UPDATE_SUCCESS: {
      return {
        ...state,
        postUpdated: true,
        updatingPost: false
      };
    }
    case types.UPDATE_ERROR: {
      return {
        ...state,
        postUpdated: false,
        updatingPost: false
      };
    }
    case types.DELETE: {
      return {
        ...state,
        postDeleted: false,
        deletingPost: true
      };
    }
    case types.DELETE_SUCCESS: {
      return {
        ...state,
        postDeleted: true,
        deletingPost: false
      };
    }
    case types.DELETE_ERROR: {
      return {
        ...state,
        postDeleted: false,
        deletingPost: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
