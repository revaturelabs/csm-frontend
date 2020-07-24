import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import DisplayAssociates from '../DisplayAssociates/DisplayAssociates';
import Login from '../Login/Login'

const Routing = (props) => {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/promotedlastweek' component={DisplayAssociates} />
    </Router>
  )
}

export default Routing;