import React, { Component } from 'react';
import { connect } from 'react-redux';

class Route extends Component {
  // handles input value for nextTripInput.route
  handleRouteChange = (event) => {
    const { onChange, dispatch } = this.props;
    onChange({ route: event.target.value });
    dispatch({ type: 'GET_ROUTE_DIRECTION', payload: event.target.value });
  }

  render() {
    // loop through nextTripRoute and return each index as an option element
    let routeOptions = this.props.nextTripRoute.map(( route ) => {
      return (
        <option key={route.Route} value={route.Route}>
          {route.Description}
        </option>
      )
    })

    return (
      <div data-testid={'route'} className='inputSelectContainer'>
        <select className='inputSelect' onChange={this.handleRouteChange}>
          <option>Select Route</option>
          {routeOptions}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(Route);