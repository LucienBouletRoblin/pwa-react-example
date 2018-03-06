import * as types from "./types";

const initialState = {
  snackbarMessage: {},
  dialog: false,
  popupSnackbar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DIALOG_OPEN: {
      return {
        ...state,
        dialog: true
      };
    }
    case types.DIALOG_CLOSE: {
      return {
        ...state,
        dialog: false
      };
    }
    case types.SNACKBAR_OPEN: {
      return {
        ...state,
        popupSnackbar: true,
        snackbarMessage: action.payload
      };
    }
    case types.SNACKBAR_CLOSE: {
      return {
        ...state,
        popupSnackbar: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
