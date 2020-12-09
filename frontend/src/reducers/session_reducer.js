import {
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_UP,
  RECEIVE_SESSION_ERRORS,
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: [],
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
    case RECEIVE_SESSION_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default session;
