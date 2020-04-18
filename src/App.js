import React, { Component } from "react";
import Nav from "../src/components/Nav/Nav";
import "./App.css";
import routes from "./routes";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading-main">
          <h1>K-9 DayCare & Grooming</h1>
        </div>

        {routes}
        <header className="App-header"></header>
      </div>
    );
  }
}

export default withRouter(App);
