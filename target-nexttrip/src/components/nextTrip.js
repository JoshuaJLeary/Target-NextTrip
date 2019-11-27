import React, { Component } from 'react';
import { connect } from 'react-redux';

class NextTrip extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ROUTE' })
    // this.props.dispatch({ type: 'FETCH_PROVIDER' })
  }

  

  render() {
    console.log('this.props:', this.props);
    let routeOptions = this.props.state.nextTripRoute.map(( route ) => {
      // console.log(route);
      return (
        <option key={route.Route} value={route.Route}>
          {route.Description}
        </option>
      )
    })
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
          <select className='inputSelect'>
           {routeOptions}
          </select>            
        </div>
        <div className='inputSelectContainer'>
          <select className='inputSelect'>
            <option>
              'Test'
            </option>
            <option>
              'Test 2'
            </option>
            <option>
              'Test 3'
            </option>
            <option>
              'Test 4'
            </option>
          </select>
        </div>
        <div className='inputSelectContainer'>
          <select className='inputSelect'>
            <option>
              'Test'
            </option>
            <option>
              'Test 2'
            </option>
            <option>
              'Test 3'
            </option>
            <option>
              'Test 4'
            </option>
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
