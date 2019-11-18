import { MAKE_TRANSFER, MAKE_TRANSFER_LOADING, CLEAR_TRANSFER } from '../actions/types';

const initialState = {
  account: [],
  loading: false,
  created: false,
};

const MakeTransferReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TRANSFER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MAKE_TRANSFER:
      return {
        ...state,
        account: action.payload,
        loading: false,
        created: true,
      };
    case CLEAR_TRANSFER:
      return {
        ...state,
        created: false,
      };
    default:
      return state;
  }
};
export default MakeTransferReducer;
