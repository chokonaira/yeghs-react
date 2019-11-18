// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  GET_TRANSFERS, TRANSFER_LOADING, MAKE_TRANSFER, GET_ERRORS,
  MAKE_TRANSFER_LOADING,
  CLEAR_TRANSFER,
} from './types';

// set request loading
export const transferLoading = type => ({
  type,
});

// GET LOGGED IN USER TRANSFERS
export const userTransfers = (dispatch) => {
  dispatch(transferLoading(TRANSFER_LOADING));
  axios().get('/fund/transfer/completed')
    .then(res => dispatch({
      type: GET_TRANSFERS,
      payload: res.data.data,
    }))
    .catch();
};

export const clearTransferCreatedState = () => (dispatch) => {
  dispatch({
    type: CLEAR_TRANSFER,
  });
};

// CREATE BANK ACCOUNT
export const makeTransfers = TransferData => (dispatch) => {
  dispatch(transferLoading(MAKE_TRANSFER_LOADING));
  axios().post('/accounts', TransferData)
    .then(res => dispatch({
      type: MAKE_TRANSFER,
      payload: res.data.data,
    }))
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.error,
        };
        toast.error(err.response.data.error, { toastId: 1 });
      }
      dispatch(transferLoading(TRANSFER_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};
