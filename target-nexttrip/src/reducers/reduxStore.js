import { combineReducers } from 'redux';
import nextTripRoute from './routeReducer';
import nextTripProvider from './providerReducer';

const store = combineReducers({
  nextTripRoute,
  nextTripProvider,
})

export default store;
