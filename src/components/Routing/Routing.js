import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from '../Login/Login'
import SwotPage from '../SwotPage/SwotPage'
import ViewSwots from '../ViewSwots/ViewSwots'

const Routing = (props) => {
    return (
        <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route path="/editSwot" component={SwotPage}/>
            <Route path='/viewSwots' component={ViewSwots}/>
        </Router>
    )
}

export default Routing;
