import { combineReducers } from 'redux'

import regionReducer from 'redux/region/reducer';
import weatherReducer from 'redux/weather/reducer';

const reducers = combineReducers({
  regions: regionReducer,
  weather: weatherReducer
});

export default reducers;