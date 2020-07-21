import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from '../Login/Login'

const Routing = (props) => {
    return (
        <Router>
            <Route exact path='/login' component={Login} />
        </Router>
    )
}

export default Routing;
