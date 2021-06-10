import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import AnnouncementPage from "./AnnouncementPage/AnnouncementPage";
import EventPage from "./EventPage/EventPage";
//import history from '../history';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignInPage} />
          <Route path="/Announcements" exact component={AnnouncementPage} />
          <Route path="/Events" exact component={EventPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
