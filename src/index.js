import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import Default from "layouts/Default.js";

const hist = createBrowserHistory();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter history={hist}>
      <Switch>
        <Route exact path="/" component={Default} />
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById("root")
);
