import axios from 'axios'
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import weatherTypes from './types';

function* watcherSaga() {
    yield takeLatest(weatherTypes.FETCH_WEATHER, handleWeatherRequest);
}

function* handleWeatherRequest(payload) {
    try {
        const response = yield axios.get('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/'+
        payload.city +'.json');
        yield put({ type: weatherTypes.WEATHER_FETCHED, payload: [...response.data.data] });
    } catch (error) {   
        yield put({ type: weatherTypes.WEATHER_FETCH_ERROR, error });
    }
}

export default function* weatherSaga() {
    yield all([fork(watcherSaga)]);
}
