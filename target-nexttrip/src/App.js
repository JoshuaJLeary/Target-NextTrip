import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NextTrip from './components/NextTrip';
import NextTripStops from './components/NextTripStops';
import NextTripStopID from './components/NextTripStopID';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={NextTrip}/>
          <Route path='/stops' component={NextTripStops}/>
          <Route path='/stopID' component={NextTripStopID}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
