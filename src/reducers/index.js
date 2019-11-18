import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';
import getTransferReducer from './getTransferReducer';
import MakeTransferReducer from './makeTransferReducer';
import fetchAccountReducer from './fetchAccountReducer';
import verifyTransferReducer from './verifyTransferReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  register: registerReducer,
  transfers: getTransferReducer,
  MakeTransfer: MakeTransferReducer,
  accounts: fetchAccountReducer,
  verifyOTP: verifyTransferReducer,
});
