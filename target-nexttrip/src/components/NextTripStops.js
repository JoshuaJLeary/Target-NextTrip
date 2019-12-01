import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class NextTripStops extends Component {
  render() {
    console.log(this.props.state.nextTripRouteDeparture)
    let routeDepartureOptions = this.props.state.nextTripRouteDeparture.map(( departure ) => {
      return (
        <div className={'nextTripStopsDataRow'}>
            <span className={'nextTripStopsRow1'}>
              {departure.Route}
            </span>
            <span className={'nextTripStopsRow2'}>
              {departure.Description}
            </span>
            <span className={'nextTripStopsRow3'}>
              {departure.DepartureText}
            </span>
          </div>
      )
    })

    return (
      <div>
        <Header />
        <div className={'nextTripStopsContainer'}>
          {routeDepartureOptions}
        </div>
        <button>
          BACK TO STOP
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(NextTripStops);
