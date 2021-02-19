import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

const initialState = {
  regions: [],
  weather: []
}

const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;