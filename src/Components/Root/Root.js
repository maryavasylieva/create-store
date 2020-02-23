import React, { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Route, Redirect,Switch } from "react-router-dom";

const AsyncCatalog = lazy(() => import("../../Pages/Catalog"));
const AsyncHome = lazy(() => import("../../Pages/Home"));

const Root = () => (
  <div>
    <Navigation></Navigation>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={AsyncHome}></Route>
        <Route path="/catalog" component={AsyncCatalog}></Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default Root;
