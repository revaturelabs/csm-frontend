import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import DisplayAssociates from '../DisplayAssociates/DisplayAssociates';
import SpiderChart from '../Charts/Chart';

const Routing = (props) => {
  return (
    <Router>
      <Route exact path='/promotedlastweek' component={DisplayAssociates} />
      <Route exact path='/spidercharts' component={SpiderChart} />
    </Router>
  )
}

export default Routing;
