import { lazy } from "react";
//TODO: set webpack chunk name to async components
const AsyncBrushesPages = lazy(() => import("../Pages/Brushes"));
const AsyncPaintsPages = lazy(() => import("../Pages/Paints"));
const AsyncCanvasPages = lazy(() => import("../Pages/Canvas"));
const AsyncCatalog = lazy(() => import("../Pages/Catalog"));
const AsyncHome = lazy(() => import("../Pages/Home"));
const AsyncLogin = lazy(() => import("../Pages/LogIn"));
const AsyncRegistration = lazy(() => import("../Pages/Registration"));
const AsyncPersonalCard = lazy(() => import("../Pages/PersonalCard"));

export const dropdownRoutes = [
  {
    path: "/catalog/brushes",
    component: AsyncBrushesPages,
    name: "Кисти"
  },
  {
    path: "/catalog/paints",
    component: AsyncPaintsPages,
    name: "Краски"
  },
  {
    path: "/catalog/canvas",
    component: AsyncCanvasPages,
    name: "Холсты"
  }
];

export const routes = [
  ...dropdownRoutes,
  {
    path: "/catalog",
    component: AsyncCatalog,
    name: "Каталог"
  },
  {
    path: "/login",
    component: AsyncLogin,
    name: "Login"
  },
  {
    path: "/registration",
    component: AsyncRegistration,
    name: "Registration"
  },
  {
    path: "/personalCard",
    component: AsyncPersonalCard,
    name: "PersonalCard"
  },
  {
    path: "/",
    component: AsyncHome,
    name: ""
  }
];
