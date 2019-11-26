import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRouteSaga(action) {
  console.log('getRouteSaga triggered', action);
  try{
    const routeResponse = yield call(axios.get, 'http://svc-api:47101/api/Routes');
    console.log(routeResponse);
    yield put({
      type: 'FETCH_ROUTE',
      payload: routeResponse.data,
    })
  } catch(error) {
    console.log('error in getRouteSaga!', error);
  }
}

export default getRouteSaga;
