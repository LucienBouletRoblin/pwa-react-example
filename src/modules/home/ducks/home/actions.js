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

export const createHomePosts = () => {
  return dispatch => {
    dispatch({
      type: types.CREATE
    });
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "test",
        body: "test",
        userId: 1
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.data) {
          dispatch({
            type: types.CREATE_SUCCESS,
            payload: true
          });
        } else if (response.data.error.code === 100) {
        }
      })
      .catch(err => {
        dispatch({
          type: types.CREATE_ERROR,
          payload: err
        });
      });
  };
};

export const updateHomePosts = () => {
  return dispatch => {
    dispatch({
      type: types.CREATE
    });
    axios({
      method: "put",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        id: 1,
        title: "updated",
        body: "updated",
        userId: 1
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.data) {
          dispatch({
            type: types.CREATE_SUCCESS,
            payload: response.data
          });
        } else if (response.data.error.code === 100) {
        }
      })
      .catch(err => {
        dispatch({
          type: types.CREATE_ERROR,
          payload: err
        });
      });
  };
};

export const deleteHomePosts = () => {
  return dispatch => {
    dispatch({
      type: types.CREATE
    });
    axios({
      method: "delete",
      url: "https://jsonplaceholder.typicode.com/posts/1"
    })
      .then(response => {
        if (response.data) {
          dispatch({
            type: types.CREATE_SUCCESS,
            payload: response.data
          });
        } else if (response.data.error.code === 100) {
        }
      })
      .catch(err => {
        dispatch({
          type: types.CREATE_ERROR,
          payload: err
        });
      });
  };
};
