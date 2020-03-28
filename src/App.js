import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { routes } from "./Components/routes";
import NavHeader from "./Components/NavHeader/NavHeader";
import theme from "./stylesheet/theme";
import Navigation from "./Components/Navigation/Navigation";

import Carousel from "./Components/Carousel/Carousel";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavHeader />
      <Navigation />
      <Carousel />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
