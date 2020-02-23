import React from "react";
import ReactDOM from "react-dom";
import Root from "./Components/Root/Root";
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <Route component={Root} />
    </BrowserRouter>,
    document.getElementById('root')
  );
