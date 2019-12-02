import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* nextTripSaga() {
  yield takeEvery('GET_ROUTE', getRoute)
  yield takeEvery('GET_ROUTE_DIRECTION', getRouteDirection)
  yield takeEvery('GET_ROUTE_STOP', getRouteStop)
  yield takeEvery('GET_ROUTE_DEPARTURE', getRouteDeparture)
  yield takeEvery('GET_ROUTE_STOPID', getRouteStopID)
}

function* getRoute(action) {
  console.log('getRouteSaga triggered:', action);
  try {
    const routeResponse = yield call(axios.get, 'http://svc.metrotransit.org/NexTrip/Routes');
    console.log(routeResponse);
    yield put({
      type: 'FETCH_ROUTE',
      payload: routeResponse.data,
    })
  } catch(error) {
    console.log('error in getRouteSaga!', error);
  }
}

function* getRouteDirection(action) {
  console.log('getRouteDirectionSaga triggered:', action);
  try {
    const routeDirectionResponse = yield call(axios.get, `http://svc.metrotransit.org/NexTrip/Directions/${action.payload}`);
    console.log(routeDirectionResponse);
    yield put({
      type: 'FETCH_ROUTE_DIRECTION',
      payload: routeDirectionResponse.data
    })
  } catch(error) {
    console.log('error in getRouteDirectionSaga', error);
  }
}

function* getRouteStop(action) {
  console.log('getRouteStopSaga triggered:', action);
    try {
      console.log('route and direction2', action.payload.direction);
      const routeStopResponse = yield call(axios.get, `http://svc.metrotransit.org/NexTrip/Stops/${action.payload.route}/${action.payload.direction}`);
      console.log(routeStopResponse);
      yield put({
        type: 'FETCH_ROUTE_STOP',
        payload: routeStopResponse.data
      })
    } catch(error) {
      console.log('error in getRouteStopSaga', error);
    }
  
}

function* getRouteDeparture(action) {
  console.log('getRouteDepature triggered:', action);
  try {
    const routeDeparture = yield call(axios.get, `http://svc.metrotransit.org/NexTrip/${action.payload.route}/${action.payload.direction}/${action.payload.stopStation}`);
    console.log(routeDeparture);
    yield put({
      type: 'FETCH_ROUTE_DEPARTURE',
      payload: routeDeparture.data
    })
  } catch(error) {
    console.log('error in getRouteDepartureSaga', error);
  }
}

function* getRouteStopID(action) {
  console.log('getRouteStopID triggered:', action);
  try {
    const routeStopID = yield call(axios.get, `http://svc.metrotransit.org/NexTrip/${action.payload}`);
    console.log(routeStopID);
    yield put({
      type: 'FETCH_ROUTE_STOPID',
      payload: routeStopID.data
    })
  } catch(error) {
    console.log('error in getRouteStopID', error);
  }
}

export default nextTripSaga;
