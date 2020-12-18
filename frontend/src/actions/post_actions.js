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

export const addLikeToPost = (id) => (dispatch) => (
  likePost(id)
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);

export const fetchPosts = () => (dispatch) => (
  getPosts()
    .then((posts) => dispatch(receivePosts(posts)))
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);

export const fetchUserPosts = (id) => (dispatch) => (
  getUserPosts(id)
    .then((posts) => dispatch(receiveUserPosts(posts)))
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);

export const composePost = (data) => (dispatch) => (
  writePost(data)
    .then((post) => dispatch(receiveNewPost(post)))
    .catch((err) => dispatch(receivePostErrors(err.response.data)))
);
