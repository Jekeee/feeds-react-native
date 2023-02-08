import * as actionTypes from './actionTypes';

const initialState = {profile: null};

export interface IProfile {
  profile: {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

function profileReducer(
  state = initialState,
  action: {
    type: string;
    payload: {
      profile: IProfile['profile'];
    };
  },
) {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    default:
      return state;
  }
}

export default profileReducer;
