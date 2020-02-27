import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { routes } from "./Components/routes";
import Navigation from "./Components/Navigation/Navigation";
import NavHeader from "./Components/NavHeader/NavHeader"

const App = () => {
  return (
    <>
      <NavHeader />
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
