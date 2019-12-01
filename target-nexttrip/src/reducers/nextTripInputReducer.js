const initalState = {
  nextTrip: {
    route: '',
    direction: '',
    stopStation: '',
  }
}

const nextTripInput = (state = initalState, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_UPDATE':
      return {
        ...state,
        nextTrip: {
          ...state.nextTrip,
          ...action.value
        },
      };
      default:
        return state;
  }
};
export default nextTripInput;
