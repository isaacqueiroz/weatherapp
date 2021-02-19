import regionTypes from './types'
const initState = {
  regions: []
}

export default function regionReducer(state = initState, action) {
  switch (action.type) {
    case regionTypes.FETCH_REGIONS:
      return {
        ...state
      };
    case regionTypes.REGIONS_FETCHED:
      const regions = action.payload;
      return {
        ...state,
        regions
      };
    default:
      return state;
  }
}