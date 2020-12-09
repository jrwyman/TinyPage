// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import * as APIUtil from '../util/session_util';

export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_SIGN_UP = 'RECEIVE_USER_SIGN_UP';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER_SIGN_IN,
  currentUser,
});

export const receiveUserSignUp = () => ({
  type: RECEIVE_USER_SIGN_UP,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(() => (
    dispatch(receiveUserSignUp())
  ), (err) => (
    dispatch(receiveErrors(err.response.data))
  ))
);

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
      dispatch(receiveErrors(err.response.data));
    })
);

export const logout = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
