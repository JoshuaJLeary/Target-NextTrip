const nextTripProvider = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PROVIDER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default nextTripProvider;