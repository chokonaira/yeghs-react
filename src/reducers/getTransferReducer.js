import { GET_TRANSFERS, TRANSFER_LOADING } from '../actions/types';

const initialState = {
  accounts: [],
  loading: false,
};

const getTransferReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSFERS:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default getTransferReducer;
