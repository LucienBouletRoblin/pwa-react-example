import axios from "axios";
import * as types from "./types";

export const getPosts = () => {
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

export const createPosts = () => ({
  type: types.CREATE,
  payload: {},
  meta: {
    offline: {
      effect: {
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        body: {
          title: "test",
          body: "test",
          userId: 1
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      },
      commit: {
        type: types.CREATE_SUCCESS,
        meta: {}
      },
      rollback: {
        type: types.CREATE_ERROR,
        meta: {}
      }
    }
  }
});

export const updatePosts = postId => ({
  type: types.UPDATE,
  payload: { postId },
  meta: {
    offline: {
      effect: {
        url: "https://jsonplaceholder.typicode.com/posts/" + postId,
        method: "PUT",
        body: {
          id: postId,
          title: "updated",
          body: "updated",
          userId: 1
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      },
      commit: {
        type: types.UPDATE_SUCCESS,
        meta: { postId }
      },
      rollback: {
        type: types.UPDATE_ERROR,
        meta: { postId }
      }
    }
  }
});

export const deletePosts = postId => ({
  type: types.DELETE,
  payload: { postId },
  meta: {
    offline: {
      effect: {
        url: "https://jsonplaceholder.typicode.com/posts/" + postId,
        method: "DELETE"
      },
      commit: {
        type: types.DELETE_SUCCESS,
        meta: { postId }
      },
      rollback: {
        type: types.DELETE_ERROR,
        meta: { postId }
      }
    }
  }
});
