const nextTripRouteDeparture = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE_DEPARTURE':
      return action.payload ;
    default:
      return state;
  }
}

export default nextTripRouteDeparture;
