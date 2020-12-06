import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signup = (userData) => axios.post('/users/register', userData);

export const login = (userData) => axios.post('/users/login', userData);
