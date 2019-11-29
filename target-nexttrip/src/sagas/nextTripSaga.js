import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* nextTripSaga() {
  yield takeEvery('GET_PROVIDER', getProviderSaga)
  yield takeEvery('GET_ROUTE', getRouteSaga)
  yield takeEvery('GET_ROUTE_DIRECTION', getRouteDirection)
}

function* getProviderSaga(action) {
  console.log('getProviderSaga triggered:', action);
  try {
    const providerResponse = yield call(axios.get, ' http://svc.metrotransit.org/NexTrip/Providers');
    console.log(providerResponse);
    yield put({
      type: 'FETCH_PROVIDER',
      payload: providerResponse.data,
    })
  } catch(error) {
    console.log('error in getProviderSaga!', error);
  }
}

function* getRouteSaga(action) {
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

export default nextTripSaga;
