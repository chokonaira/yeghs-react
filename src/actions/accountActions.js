import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  FETCH_ACCOUNT, ACCOUNT_LOADING, CREATE_ACCOUNT, CLEAR_ACCOUNT, GET_ERRORS,
} from './types';

// set request loading
export const accountLoading = type => ({
  type,
});


// GET LOGGED IN USER TRANSFERS
export const userAccount = () => (dispatch) => {
  dispatch(accountLoading(ACCOUNT_LOADING));
  axios().get('/account/accounts')
    .then(res => dispatch({
      type: FETCH_ACCOUNT,
      payload: res.data.data[0],
    }))
    .catch(e => console.log(e, 'error'));
};

export const clearAccountCreatedState = () => (dispatch) => {
  dispatch({
    type: CLEAR_ACCOUNT,
  });
};


// CREATE BANK ACCOUNT
export const creatAccount = AccountData => (dispatch) => {
  dispatch(accountLoading(ACCOUNT_LOADING));
  axios().post('/account/create', AccountData)
    .then(res => dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data.data,
    }))
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.message,
        };
        toast.error(err.response.data.message, { toastId: 1 });
      }
      dispatch(accountLoading(ACCOUNT_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};