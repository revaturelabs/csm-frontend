import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import DisplayAssociates from '../DisplayAssociates/DisplayAssociates';

const Routing = (props) => {
  return (
    <Router>
      <Route exact path='/promotedlastweek' component={DisplayAssociates} />
    </Router>
  )
}

export default Routing;
