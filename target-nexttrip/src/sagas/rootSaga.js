import { all } from 'redux-saga/effects';
import routeSaga from './routeSaga';

export default function* rootSaga() {
  yield all([
    routeSaga(),
  ]);
}
