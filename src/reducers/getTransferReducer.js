import { GET_TRANSFERS, GET_TRANSFER_LOADING } from '../actions/types';

const initialState = {
  transfers: [],
  loading: false,
};

const getTransferReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSFER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSFERS:
      return {
        ...state,
        transfers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default getTransferReducer;
