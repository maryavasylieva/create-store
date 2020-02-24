import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import "antd/dist/antd.css";

import Root from "./Components/Root/Root";


ReactDOM.render(
    <BrowserRouter>
      <Route component={Root} />
    </BrowserRouter>,
    document.getElementById('root')
  );
