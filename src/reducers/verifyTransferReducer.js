import { VERIFY_OTP, TRANSFER_LOADING, CLEAR_TRANSFER } from '../actions/types';

const initialState = {
  account: [],
  loading: false,
  verified: false,
};

const verifyTransferReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_OTP:
      return {
        ...state,
        account: action.payload,
        loading: false,
        verified: true,
      };
    case CLEAR_TRANSFER:
      return {
        ...state,
        verified: false,
      };
    default:
      return state;
  }
};
export default verifyTransferReducer;
