import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import moment from 'moment';

class NextTripStopID extends Component {

  handleGoBack = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    let routeStopID = this.props.state.nextTripStopID.map(( departure ) => {
      return (
        <div key={departure.DepartureTime} className={'nextTripStopsDataRow'}>
          <span className={'nextTripStopsRow1'}>
            <a className={'routeLink'} href={`https://www.metrotransit.org/route/${departure.Route}`}>
              {departure.Route}
            </a>
          </span>
          <span className={'nextTripStopsRow2'}>
            <a className={'routeLink'} href={`https://www.metrotransit.org/route/${departure.Route}`}>
              {departure.Description}
            </a>
          </span>
          <span className={'nextTripStopsRow3'}>
            {departure.DepartureText}
          </span>
        </div>
      )
    })

    let mostRecentDepartureTime = this.props.state.nextTripStopID[0].DepartureText

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
          {routeStopID}
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

export default connect(mapStateToProps)(NextTripStopID);
