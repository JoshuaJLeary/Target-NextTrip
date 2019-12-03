import React, { Component } from 'react';
import { connect } from 'react-redux';

class Direction extends Component {

  //handles input value for nextTripInput.direction
  handleDirectionChange = (event) => {
    const { onChange, dispatch } = this.props;
    onChange({ direction: event.target.value });
    setTimeout( () => {
      dispatch({ type: 'GET_ROUTE_STOP', payload: this.props.nextTripInput.nextTrip })
    }, 500);
  }

  render() {
    //loop through nextTripRouteDirection and return each index as an option element
    let routeDirection = this.props.nextTripRouteDirection.map(( direction ) => {
      console.log('this.props:', this.props);
      return (
        <option key={direction.Value} value={direction.Value}>
          {direction.Text}
        </option>
      )
    })

    return (
      <div className='inputSelectContainer'>
        <select className='inputSelect' onChange={this.handleDirectionChange}>
          <option>Select Direction</option>
          {routeDirection}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(Direction);
