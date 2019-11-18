import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';
import getTransferReducer from './getTransferReducer';
import MakeTransferReducer from './makeTransferReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  register: registerReducer,
  accounts: getTransferReducer,
  MakeTransfer: MakeTransferReducer,
});
