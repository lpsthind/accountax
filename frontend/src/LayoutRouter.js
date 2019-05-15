import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/login";
import AppRoute from "./containers/AppRouting";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/auth/" component={AppRoute} />
  </Switch>
);
export default BaseRouter;
