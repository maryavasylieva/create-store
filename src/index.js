import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from "./Components/Root/Root";
import "./scss/index.scss";
import "./scss/normalize.scss";

ReactDOM.render(
  <BrowserRouter>
    <Route component={Root} />
  </BrowserRouter>,
  document.getElementById("root")
);
