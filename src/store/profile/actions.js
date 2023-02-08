import {fetchProfile} from '../../api/fetchApi';
import * as actionTypes from './actionTypes';

export function setProfile(profile) {
  return {
    type: actionTypes.SET_PROFILE,
    payload: {
      profile,
      isLoading: false,
    },
  };
}

export function getProfile() {
  return dispatch => {
    fetchProfile().then(resp => {
      dispatch(setProfile(resp.data));
    });
  };
}
