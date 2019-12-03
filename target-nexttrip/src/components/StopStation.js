import React, { Component } from 'react';
import { connect } from 'react-redux';

class StopStation extends Component {
  // handles input value for nextTripInput.stopStation
  handleStopStationChange = (event) => {
    const { onChange, dispatch } = this.props;
    onChange({ stopStation: event.target.value });
    setTimeout( () => {
      dispatch({ type: 'GET_ROUTE_DEPARTURE', payload: this.props.nextTripInput.nextTrip })
    }, 500);
  }

  render() {
    // loop through nextTripRouteStop and return each index as an option element
    let routeOptions = this.props.nextTripRouteStop.map(( routeStop ) => {
      return (
        <option key={routeStop.Value} value={routeStop.Value}>
          {routeStop.Text}
        </option>
      )
    })

    return (
      <div data-testid={'stopStation'} className='inputSelectContainer'>
        <select className='inputSelect' onChange={this.handleStopStationChange}>
          <option>Select Stop/Station</option>
          {routeOptions}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(StopStation);
