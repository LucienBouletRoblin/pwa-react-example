import * as types from "./types";

export const openCreateTicketDialog = () => {
  return dispatch => {
    dispatch({
      type: types.DIALOG_OPEN
    });
  };
};

export const closeCreateTicketDialog = () => {
  return dispatch => {
    dispatch({
      type: types.DIALOG_CLOSE
    });
  };
};

export const openSnackbar = snackbarMessage => {
  return dispatch => {
    dispatch({
      type: types.SNACKBAR_OPEN,
      payload: snackbarMessage
    });
  };
};

export const closeSnackbar = () => {
  return dispatch => {
    dispatch({
      type: types.SNACKBAR_CLOSE
    });
  };
};
