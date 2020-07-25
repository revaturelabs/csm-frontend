import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import DisplayAssociates from "../DisplayAssociates/DisplayAssociates";
import Login from "../Login/Login";
import ViewSwots from "../ViewSwots/ViewSwots";
import SwotPage from "../SwotPage/SwotPage";

function checkLogin() {
  return sessionStorage.getItem('mngr') ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkLogin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);


const Routing = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/promotedlastweek" component={DisplayAssociates} />
      <PrivateRoute path="/viewSwots" component={ViewSwots} />
      <PrivateRoute path="/editSwot" component={SwotPage} />
    </Router>
  );
};

export default Routing;
