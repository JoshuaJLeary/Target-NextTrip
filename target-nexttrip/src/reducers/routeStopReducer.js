const nextTripRouteStop = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE_STOP':
      return action.payload ;
    default:
      return state;
  }
}

export default nextTripRouteStop;
