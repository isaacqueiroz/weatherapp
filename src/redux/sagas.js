import { all } from 'redux-saga/effects';
import regionsSaga from './region/sagas';
import weatherSaga from './weather/sagas';
export default function* rootSaga() {
    yield all([
        regionsSaga(),
        weatherSaga()
    ]);
}