import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// import ThemeProvider from "styled-components";

import { routes } from "./Components/routes";
// import Navigation from "./Components/Navigation/Navigation";
import NavHeader from "./Components/NavHeader/NavHeader";
import Navigation from "./Components/Navigation/Navigation";

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

// const theme = {
//    mainText: "Noto Sans",
//    navText: "Montserrat",
//    hoverDropdown: "#EDEAEA",
//    backgroundDropdown: "#ffffff",
// }

export default App;
