import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../src/components/Main/Main";
import Login from "../src/components/Login/Login";
import AdminDash from "../src/components/AdminDash/AdminDash";
import AddClientInfo from "../src/components/AddClientInfo/AddClientInfo";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/dashboard" component={AdminDash} />
    <Route path="/login" component={Login} />
    <Route path="/add_client" component={AddClientInfo} />

    {/* <Route path="/dashboard/admin" component={AdminDash} /> */}
  </Switch>
);
