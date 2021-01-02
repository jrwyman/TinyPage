import {
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_UP,
  RECEIVE_SESSION_ERROR,
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_UP:
      return {
        ...state,
      };
    case RECEIVE_SESSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default session;
