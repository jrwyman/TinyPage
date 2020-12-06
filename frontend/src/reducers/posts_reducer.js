import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  RECEIVE_POST_ERRORS,
} from '../actions/post_actions';

const initialState = {
  all: {},
  user: {},
  new: undefined,
  errors: [],
};

const posts = (state = initialState, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    case RECEIVE_NEW_POST:
      newState.new = action.post.data;
      return newState;
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
