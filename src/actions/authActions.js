import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../config/axiosInstance';
import {
  LOGIN_REQUEST_LOADING,
  SIGN_UP_REQUEST_LOADING,
  GET_ERRORS,
  SET_CURRENT_USER,
  NEW_USER,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// set request loading
export const requestLoading = type => ({
  type,
});

// set logged in user
export const newUser = decoded => ({
  type: NEW_USER,
  payload: decoded,
});

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = userData => (dispatch) => {
  dispatch(requestLoading(LOGIN_REQUEST_LOADING));
  axios()
    .post('/user/auth/login', userData)
    .then((res) => {
      // save token to local storage
      const { data, message, token } = res.data;

      toast.success(message);
      // // set token to local storage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(data[0]));
      // // set token to Auth header
      setAuthToken(token);
      // // Set current user
      dispatch(setCurrentUser(data[0]));
    })
    .catch((err) => {
      let { data } = err.response;
      if (data.status === 400 || data.status === 422) {
        data = {
          auth: err.response.data.message
        };
        console.log(data, '>>>>>>>>>>>>>>>>>>>>>>>>>');

        toast.error(err.response.data.message, { toastId: 1 });
      }
      dispatch(requestLoading(LOGIN_REQUEST_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: data,
      });
    });
};

export const registerUser = userData => (dispatch) => {
  dispatch(requestLoading(SIGN_UP_REQUEST_LOADING));

  let { username, email, phone, authorizationPin, password } = userData;

  username = username.toLowerCase();
  email = email.toLowerCase();

  const newUserData = {
    username,
    email,
    phone,
    authorizationPin,
    password
  };

  axios()
    .post('/user/auth/signup', newUserData)
    .then((res) => {
      const { data } = res.data;
      // Set current user
      dispatch(newUser(data));
    })
    .catch((err) => {
      let { data: message } = err.response;

      if (err.response.status === 400 || err.response.status === 422) {
        message = {
          auth: err.response.data
        };
        toast.error(err.response.data.message, { toastId: 1 });
      }
      dispatch(requestLoading(SIGN_UP_REQUEST_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message
      });
    });
};
