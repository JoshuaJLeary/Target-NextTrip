import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Route from './Route';
import Direction from './Direction';
import StopStation from './StopStation';

class NextTrip extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nextTrip: {
//         selectedRoute: '901',
//         selectedDirection: '4',
//       }
//     }
// }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ROUTE' })
    // this.props.dispatch({ type: 'GET_ROUTE_DIRECTION', payload: this.state.selectedRoute })
    // this.props.dispatch({ type: 'FETCH_PROVIDER' })
  }

  // getRouteDirection = () => {
  //   this.props.dispatch({ type: 'GET_ROUTE_DIRECTION', payload: this.state.selectedRoute })
  // }

  handleInputUpdate = (value) => {
    const { dispatch } = this.props;
    console.log('inputValue:', value);
    dispatch({ type: 'HANDLE_INPUT_UPDATE', value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/stops');
  }

  // selectRoute = (event) => {
  //   this.setState({
  //     selectedRoute: event.target.value
  //   })
  //   this.props.dispatch({ type: 'GET_ROUTE_DIRECTION', payload: this.props.state.nextTripInput.route })
  // }

  // getRouteStop = () => {
  //   this.props.dispatch({ type: 'GET_ROUTE_STOP', payload: this.state.nextTrip})
  // }

  // selectRouteDirection = (event) => {
  //   this.setState({
  //     selectedDirection: event.target.value
  //   }, () => this.getRouteStop(this.state.nextTrip))
  //   console.log('selectedDirection:', event.target.value)
  // }

  render() {
    console.log('departureState', this.props.state.nextTripRouteDeparture)
    console.log('this.props.history', this.props.history)
    return (
      <form className='headerContainer' onSubmit={this.handleSubmit}>
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
        />
        <hr className='dividerLine' />
        <div className='inputStopNumberContainer'>
          <input className='inputStopNumber' type='text'>
          </input>
        </div>
        <div className='inputStopNumberContainer'>
          <input className='inputStopNumberBtn' type='submit' value='STOP NUMBER'>
          </input>
        </div>
        <button onClick={this.handleSubmit} type='submit'>
          SUBMIT
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(NextTrip);
