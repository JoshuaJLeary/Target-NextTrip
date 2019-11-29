import React, { Component } from 'react';
import { connect } from 'react-redux';

import Direction from './Direction';

class NextTrip extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      selectedRoute: ''
    })
}

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ROUTE' })
    // this.props.dispatch({ type: 'GET_ROUTE_DIRECTION', payload: this.state.selectedRoute })
    // this.props.dispatch({ type: 'FETCH_PROVIDER' })
  }

  getRouteDirection = () => {
    this.props.dispatch({ type: 'GET_ROUTE_DIRECTION', payload: this.state.selectedRoute })
  }

  selectRouteDirection = (event) => {
    this.setState({
      selectedRoute: event.target.value
    }, () => this.getRouteDirection(this.state.selectedRoute))
    console.log('selectedRoute:', event.target.value);
    console.log('selectedRouteActual:', this.state.selectedRoute);
  }

  render() {
    let routeOptions = this.props.state.nextTripRoute.map(( route ) => {
      // console.log('route;', route );
      return (
        <option key={route.Route} value={route.Route}>
          {route.Description}
        </option>
      )
    })

    const routeDirection = this.props.state.nextTripRouteDirection.map(( direction ) => {
      console.log( 'this.props.DIRECTION:', this.props );
      console.log( 'direction:', direction );
      return (
        <option key={direction.Value} value={direction.Value}>
          {direction.Text}
        </option>
      )
    })
    console.log('routeOptions:', routeOptions);
    console.log('routeDirection:', routeDirection);
    console.log('this.props.again:', this.props.state.nextTripRouteDirection);
    
    return (
      <form className='headerContainer'>
        <div className='headerContainer'>
          <div id='metroImgContainer'>
            <img src='https://www.metrotransit.org/images/mob_logo.png' className='metroImg' alt='metroTransitLogo' />
          </div>
          <div id='metroImgBannerContainer'>
            <img src='https://www.metrotransit.org/images/mob_banner.png' className='metroImgBanner' alt='metroTransitBanner' />
          </div>
        </div>
        <div className='inputSelectContainer'>
          <select className='inputSelect' onChange={this.selectRouteDirection}>
            <option>Select Route</option>
            {routeOptions}
          </select>            
        </div>
        <div className='inputSelectContainer'>
          <select className='inputSelect'>
            <option>Select Direction</option>
            {routeDirection}
          </select>            
        </div>
        {/* <Direction nextTripRouteDirection={this.props.state.nextTripRouteDirection}/> */}
        <div className='inputSelectContainer'>
          <select className='inputSelect'>
            <option>Select Stop/Station</option>
          </select>
        </div>
        <hr className='dividerLine' />
        <div className='inputStopNumberContainer'>
          <input className='inputStopNumber' type='text'>
          </input>
        </div>
        <div className='inputStopNumberContainer'>
          <input className='inputStopNumberBtn' type='submit' value='STOP NUMBER'>
          </input>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(NextTrip);
