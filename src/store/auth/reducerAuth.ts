import * as actionTypes from './actionTypes';

export interface AuthState {
  [x: string]: any;
  authToken: string;
}

const initialState: AuthState = {
  authToken: '',
};

function reducerAuth(
  state = initialState,
  action: {
    type: string;
    payload: {
      authToken: string;
    };
  },
) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        authToken: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        authToken: '',
      };
    default:
      return state;
  }
}

export default reducerAuth;
