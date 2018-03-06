import axios from "axios";
import * as types from "./types";

export const getHomeStuffs = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_ALL
    });
    axios({
      method: "post",
      url: "/api/home",
      data: {},
      withCredentials: true
    })
      .then(response => {
        if (response.data.result) {
          dispatch({
            type: types.FETCH_ALL_SUCCESS,
            payload: response.data.result
          });
        } else if (response.data.error.code === 100) {
        }
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_ALL_ERROR,
          payload: err
        });
      });
  };
};
