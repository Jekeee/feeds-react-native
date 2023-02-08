import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import feedReducer from './feed/reducerFeed';
import profileReducer from './profile/reducerProfile';
import * as feed from './feed/actions';
import * as profile from './profile/actions';
import reducerAuth from './auth/reducerAuth';

export const actions = {
  feed,
  profile,
};

const rootReducer = combineReducers({feedReducer, profileReducer, reducerAuth});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
