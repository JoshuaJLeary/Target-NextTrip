import { combineReducers } from 'redux';
import nextTripRoute from './routeReducer';
import nextTripProvider from './providerReducer';
import nextTripRouteDirection from './routeDirectionReducer';

const store = combineReducers({
  nextTripRoute,
  nextTripProvider,
  nextTripRouteDirection
})

export default store;
