import React, { Component } from 'react';
import { connect } from 'react-redux';

class Direction extends Component {
  render() {

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
        <select className='inputSelect'>
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
