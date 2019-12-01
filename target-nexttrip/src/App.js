import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NextTrip from './components/NextTrip';
import NextTripStops from './components/NextTripStops';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Redirect exact from='/' to='/nextTrip'/> */}
          <Route exact path='/' component={NextTrip}/>
          <Route path='/stops' component={NextTripStops} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
