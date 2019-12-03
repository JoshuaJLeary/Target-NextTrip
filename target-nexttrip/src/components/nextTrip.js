import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Route from './Route';
import Direction from './Direction';
import StopStation from './StopStation';

class NextTrip extends Component {

  // loads available routes on page load
  componentDidMount() {
    this.props.dispatch({ type: 'GET_ROUTE' })
  }
  // handles input data from Route.js, Direction.js, and StopStation.js and saves it to nextTripInputReducer
  handleInputUpdate = (value) => {
    const { dispatch } = this.props;
    console.log('inputValue:', value);
    dispatch({ type: 'HANDLE_INPUT_UPDATE', value });
  }
  // captures value of stopID input and dispatches value to saga for stopID API call 
  handleRouteStopIDChange = (event) => {
    const { dispatch } = this.props;
    dispatch({ type: 'GET_ROUTE_STOPID', payload: event.target.value });
  }
  // onClick submits nextTripInput data to saga for stopStation API call
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/stops');
  }
  // onClick pushs to NextTripStopID page and displays departure times based on stopID input value
  handleStopIDSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/stopID')
  }

  render() {
    console.log('departureState', this.props.state.nextTripRouteDeparture)
    console.log('this.props.history', this.props.history)
    return (
      <form className='headerContainer'>
        <Header />
        <Route
          nextTripRoute={this.props.state.nextTripRoute}
          onChange={this.handleInputUpdate}
        />
        <Direction 
          nextTripRouteDirection={this.props.state.nextTripRouteDirection}
          nextTripInput={this.props.state.nextTripInput}
          onChange={this.handleInputUpdate}
        />
        <StopStation
          nextTripRouteStop={this.props.state.nextTripRouteStop}
          nextTripInput={this.props.state.nextTripInput}
          onChange={this.handleInputUpdate}
          onSubmit={this.handleSubmit}
        />
        <button className={'submitBtn'} onClick={this.handleSubmit} type='submit'>
          SUBMIT
        </button>
        <hr className='dividerLine' />
        <div className='inputStopNumberContainer'>
          <input className='inputStopNumber' type='text' onSubmit={this.handleRouteStopIDChange}>
          </input>
        </div>
        <div className='inputStopNumberContainer'>
          <button className='inputStopNumberBtn' type='submit' onClick={this.handleStopIDSubmit}>
            STOP NUMBER
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(NextTrip);
