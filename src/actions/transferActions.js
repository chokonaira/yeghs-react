// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  GET_TRANSFERS, GET_TRANSFER_LOADING, TRANSFER_LOADING, MAKE_TRANSFER, MAKE_TRANSFER_LOADING, VERIFY_OTP, GET_ERRORS,
  CLEAR_TRANSFER,
} from './types';

// set request loading
export const transferLoading = type => ({
  type,
});
// set request loading
export const getTransferLoading = type => ({
  type,
});

// GET LOGGED IN USER TRANSFERS
export const userTransfers = () => (dispatch) => {
  dispatch(getTransferLoading(GET_TRANSFER_LOADING));
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

// TRANSFER FUND
export const makeTransfers = TransferData => (dispatch) => {
  dispatch(transferLoading(MAKE_TRANSFER_LOADING));
  axios().post('/fund/transfer', TransferData)
    .then(res => dispatch({
      type: MAKE_TRANSFER,
      payload: res.data,
    }))
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.message,
        };
        toast.error(err.response.data.message, { toastId: 1 });
      }
      dispatch(transferLoading(MAKE_TRANSFER_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};

// VERIFY TRANSFER 
export const verifyTransfers = OTPData => (dispatch) => {
  dispatch(transferLoading(TRANSFER_LOADING));
  axios().post('/fund/transfer/verify', OTPData)
    .then(res => dispatch({
      type: VERIFY_OTP,
      payload: res.data,
    }))
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.message,
        };
        toast.error(err.response.data.message, { toastId: 1 });
      }
      dispatch(transferLoading(TRANSFER_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};
