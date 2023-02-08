import * as actionTypes from './actionTypes';

export interface FeedState {
  feedData: {
    feed: Array<{
      id: string;
      download_url: string;
      author: string;
    }>;
    isLoading: boolean;
    page: number;
    isRefreshing: boolean;
  };
}

const initialState: FeedState = {
  feedData: {feed: [], isLoading: true, page: 0, isRefreshing: false},
};

function feedReducer(
  state = initialState,
  action: {type: string; payload: {}},
) {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SET_FEED:
      return {
        ...state,
        feedData: action.payload,
      };
    default:
      return state;
  }
}

export default feedReducer;
