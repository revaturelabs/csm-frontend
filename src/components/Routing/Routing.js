import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import DisplayAssociates from '../DisplayAssociates/DisplayAssociates';
import SpiderChart from '../SpiderCharts/SpiderChart';
import Login from '../Login/Login'
import QC from '../QC/qc'

const Routing = (props) => {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/promotedlastweek' component={DisplayAssociates} />
      <Route exact path='/spidercharts' component={SpiderChart} />
      <Route exact path='/qcdata' component={QC} />
    </Router>
  )
}

export default Routing
