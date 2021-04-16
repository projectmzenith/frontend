import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import SignInPage from './SignInPage/SignInPage';
import Calendarorsomething from './Calendarorsomething/Calendarorsomething';
import history from '../history';

const App=()=> {
  return (
    <div>
    <Router history={history}>
      <div>
        <Switch>
          <Route path='/' exact component={SignInPage}/>
          <Route path='/' exact component={Calendarorsomething}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
