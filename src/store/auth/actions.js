import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({
        type: actionTypes.LOGIN,
        payload: token,
      });
    }
  };
};

export const Login = username => {
  return async dispatch => {
    /** 1 seconds delay to mock api request */
    await new Promise(resolve => setTimeout(resolve, 1000));
    const token = `${username}`;

    await AsyncStorage.setItem('token', token);

    dispatch({
      type: actionTypes.LOGIN,
      payload: token,
    });
  };
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };
};
