import { combineReducers } from 'redux';
import nextTrip from './nextTripReducer';

const store = combineReducers({
  nextTrip,
})

export default store;
