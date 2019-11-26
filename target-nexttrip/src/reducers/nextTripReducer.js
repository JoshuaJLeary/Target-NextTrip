const nextTrip = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ROUTE':
      console.log('FETCH_ROUTE', 'is this working??');
      return action.payload;
    default:
      return state;
  }
}

export default nextTrip;
