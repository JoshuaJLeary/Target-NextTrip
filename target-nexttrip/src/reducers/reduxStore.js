import { combineReducers } from 'redux';
import nextTripRoute from './routeReducer';
import nextTripRouteDirection from './routeDirectionReducer';
import nextTripRouteStop from './routeStopReducer';
import nextTripInput from './nextTripInputReducer';
import nextTripRouteDeparture from './routeDepartureReducer';
import nextTripStopID from './stopIDReducer';

const store = combineReducers({
  nextTripRoute,
  nextTripRouteDirection,
  nextTripRouteStop,
  nextTripInput,
  nextTripRouteDeparture,
  nextTripStopID
})

export default store;
