import axios from 'axios'
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import regionTypes from './types';

function* watcherSaga() {
    yield takeLatest(regionTypes.FETCH_REGIONS, handleRegionsRequest);
}

function* handleRegionsRequest() {
    try {
        const response = yield axios.get('http://api.ipma.pt/open-data/distrits-islands.json');
        const regions = yield response.data.data;

        yield put({ type: regionTypes.REGIONS_FETCHED, payload: [...regions] });
    } catch (error) {   
        yield put({ type: regionTypes.REGIONS_FETCH_ERROR, error });
    }
}

export default function* regionSaga() {
    yield all([fork(watcherSaga)]);
}
