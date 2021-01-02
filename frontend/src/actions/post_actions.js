/* eslint-disable no-debugger */
import {
  getPosts, getUserPosts, writePost, likePost,
} from '../util/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receiveUserPosts = (posts) => ({
  type: RECEIVE_USER_POSTS,
  posts,
});

export const receiveNewPost = (post) => ({
  type: RECEIVE_NEW_POST,
  post,
});

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const addLikeToPost = (id) => async (dispatch) => {
  try {
    await likePost(id);
  } catch (e) {
    dispatch(receivePostErrors(e.response.data));
  }
};

export const fetchPosts = () => (dispatch) => (
  getPosts()
    .then((posts) => {
      dispatch(receivePosts(posts));
    })
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);

export const fetchUserPosts = (id) => (dispatch) => (
  getUserPosts(id)
    .then((posts) => dispatch(receiveUserPosts(posts)))
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);

export const composePost = (data) => async (dispatch) => {
  try {
    const post = await writePost(data);
    dispatch(receiveNewPost(post));
  } catch (e) {
    dispatch(receivePostErrors(e.response.data));
  }
};
