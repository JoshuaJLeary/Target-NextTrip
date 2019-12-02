const nextTripStopID = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE_STOPID':
      return action.payload ;
    default:
      return state;
  }
}

export default nextTripStopID;
