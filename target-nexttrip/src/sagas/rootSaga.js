import { all } from 'redux-saga/effects';
import nextTripSaga from './nextTripSaga';

export default function* rootSaga() {
  yield all([
    nextTripSaga(),
  ]);
}
