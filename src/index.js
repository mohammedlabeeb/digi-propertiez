import React from "react";
import ReactDOM from "react-dom";
import { LocalizeProvider } from "react-localize-redux";
import { Route, Router } from "react-router-dom";
import Main from "./Main";

import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.css?v=1.3.0";

var hist = createBrowserHistory();


ReactDOM.render(
  <LocalizeProvider>
    <Router history={hist}>
      <Route path="/" component={Main} />
    </Router>
  </LocalizeProvider>,
  document.getElementById("root")
);
