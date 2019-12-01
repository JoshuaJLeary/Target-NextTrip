import { combineReducers } from 'redux';
import nextTripRoute from './routeReducer';
import nextTripProvider from './providerReducer';
import nextTripRouteDirection from './routeDirectionReducer';
import nextTripRouteStop from './routeStopReducer';
import nextTripInput from './nextTripInputReducer';
import nextTripRouteDeparture from './routeDepartureReducer';

const store = combineReducers({
  nextTripRoute,
  nextTripProvider,
  nextTripRouteDirection,
  nextTripRouteStop,
  nextTripInput,
  nextTripRouteDeparture
})

export default store;
