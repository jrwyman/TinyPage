import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  RECEIVE_POST_ERRORS,
} from '../actions/post_actions';

const initialState = {
  all: [],
  userPosts: [],
  new: undefined,
  errors: {},
};

const posts = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        all: action.posts,
      };
    case RECEIVE_USER_POSTS:
      return {
        ...state,
        userPosts: action.posts,
      };
    case RECEIVE_NEW_POST:
      return {
        ...state,
        new: action.post,
      };
    case RECEIVE_POST_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default posts;
