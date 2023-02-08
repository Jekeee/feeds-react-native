import {fetchFeed} from '../../api/fetchApi';
import * as actionTypesFeed from './actionTypes';

export function startLoading() {
  return {
    type: actionTypesFeed.START_LOADING,
  };
}

export function setFeed(feed, page) {
  return {
    type: actionTypesFeed.SET_FEED,
    payload: {
      feed,
      page,
      isLoading: false,
      isRefreshing: false,
    },
  };
}

export function getFeed(page) {
  if (page === 1) {
    return dispatch => {
      dispatch(startLoading());
      fetchFeed(page).then(data => {
        const newFeed = data;
        dispatch(setFeed(newFeed, page));
      });
    };
  } else {
    return (dispatch, getState) => {
      dispatch(startLoading());
      const oldFeed = getState().feedReducer.feedData.feed;
      fetchFeed(page).then(data => {
        const newFeed = [...oldFeed, ...data];
        dispatch(setFeed(newFeed, page));
      });
    };
  }
}
