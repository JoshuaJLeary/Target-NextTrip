const nextTripRouteDirection = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE_DIRECTION':
      return action.payload ;
    default:
      return state;
  }
}

export default nextTripRouteDirection;