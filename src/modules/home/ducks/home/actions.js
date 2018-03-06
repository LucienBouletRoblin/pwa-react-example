import axios from "axios";
import * as types from "./types";

export const getHomePosts = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_ALL
    });
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts"
      // data: {},
    })
      .then(response => {
        if (response.data) {
          dispatch({
            type: types.FETCH_ALL_SUCCESS,
            payload: response.data
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
