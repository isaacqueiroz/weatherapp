import weatherTypes from './types'
const initState = {
  weather: []
}

export default function weatherReducer(state = initState, action) {
  switch (action.type) {
    case weatherTypes.FETCH_WEATHER:
      return {
        ...state
      };
    case weatherTypes.WEATHER_FETCHED:
        const weather = action.payload;
      return {
        ...state,
        weather
      };
    default:
      return state;
  }
}