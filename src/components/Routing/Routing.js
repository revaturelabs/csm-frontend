import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import DisplayAssociates from "../DisplayAssociates/DisplayAssociates";
import Login from "../Login/Login";
import ViewSwots from "../ViewSwots/ViewSwots";
import SwotPage from "../SwotPage/SwotPage";

const checkLogin = () => {
  let user = JSON.parse(sessionStorage.getItem("loggedUser"));
  return !!user
};

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
