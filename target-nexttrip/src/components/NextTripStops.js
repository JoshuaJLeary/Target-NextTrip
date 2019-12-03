import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import moment from 'moment';

class NextTripStops extends Component {
  // onClick takes user back to NextTrip.js
  handleGoBack = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  componentDidMount() {
    if(!this.props.state.nextTripRouteDeparture) {
      console.log('nextTripRouteDeparture', this.props.state.nextTripRouteDeparture);
      this.props.history.push('/');
    }
  }

  render() {
    let currentRoute = this.props.state.nextTripInput.nextTrip.route;
    let routeDepartureOptions = this.props.state.nextTripRouteDeparture.map(( departure ) => {
      return (
        <div key={departure.DepartureTime} className={'nextTripStopsDataRow'}>
          <span className={'nextTripStopsRow1'}>
            <a className={'routeLink'} href={`https://www.metrotransit.org/route/${currentRoute}`}>
              {departure.Route}
            </a>
          </span>
          <span className={'nextTripStopsRow2'}>
            <a className={'routeLink'} href={`https://www.metrotransit.org/route/${currentRoute}`}>
              {departure.Description}
            </a>
          </span>
          <span className={'nextTripStopsRow3'}>
            {departure.DepartureText}
          </span>
        </div>
      )
    })
    // captures most recent departure time for first index of nextTripRouteDeparture
    let mostRecentDepartureTime = this.props.state.nextTripRouteDeparture[0].DepartureText

    return (
      <div>
        <Header />
        <div className={'departureTimeContainer'}>
          <span className={'departureTime'}>
            <i>Nex</i>Trip departs at <b>{mostRecentDepartureTime}</b> 
          </span>
          <span className={'currentTimeDisplay'}>
            Current Time: {moment().format('LT')}
          </span>
        </div>
        <div className={'dataHeaderContainer'}>
          <span className={'dataHeaderLeft'}>
            Route
          </span>
          <span className={'dataHeaderRight'}>
            Departs
          </span>
        </div>
        <div className={'nextTripStopsContainer'}>
          {routeDepartureOptions}
        </div>
        <button className={'backToStopBtn'} onClick={this.handleGoBack}>
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
