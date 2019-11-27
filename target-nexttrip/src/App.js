import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NextTrip from './components/nextTrip';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Redirect exact from='/' to='/nextTrip'/> */}
          <Route path='/nextTrip' component={NextTrip}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
