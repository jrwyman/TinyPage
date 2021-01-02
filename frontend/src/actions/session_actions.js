// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import * as APIUtil from '../util/session_util';

export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_SIGN_UP = 'RECEIVE_USER_SIGN_UP';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER_SIGN_IN,
  currentUser,
});

export const receiveUserSignUp = () => ({
  type: RECEIVE_USER_SIGN_UP,
});

export const receiveError = (error) => ({
  type: RECEIVE_SESSION_ERROR,
  error,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const signup = (user) => async (dispatch) => {
  try {
    await APIUtil.signup(user);
    return dispatch(receiveUserSignUp());
  } catch (e) {
    return dispatch(receiveError(e.response.data));
  }
};

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then((res) => {
    const { token } = res.data;
    // eslint-disable-next-line no-undef
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
  })
    .catch((err) => {
      dispatch(receiveError(err.response.data));
    })
);

export const logout = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
