const nextTripRoute = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE':
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}

export default nextTripRoute;
