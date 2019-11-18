import isEmpty from '../validations/isEmpty';
import { NEW_USER, SIGN_UP_REQUEST_LOADING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case NEW_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
