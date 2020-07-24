import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
=======

import DisplayAssociates from '../DisplayAssociates/DisplayAssociates';
>>>>>>> c835978f343cfb3b4384532d01d68a916cafd0e4
import Login from '../Login/Login'
import SwotPage from '../SwotPage/SwotPage'
import ViewSwots from '../ViewSwots/ViewSwots'

const Routing = (props) => {
<<<<<<< HEAD
    return (
        <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route path="/editSwot" component={SwotPage}/>
            <Route path='/viewSwots' component={ViewSwots}/>
        </Router>
    )
=======
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/promotedlastweek' component={DisplayAssociates} />
    </Router>
  )
>>>>>>> c835978f343cfb3b4384532d01d68a916cafd0e4
}

export default Routing;