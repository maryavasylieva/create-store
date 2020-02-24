import { lazy } from "react";
//TODO: set webpack chunk name to async components
const BrushesPages = lazy(() => import("../Pages/Brushes"));
const PaintsPages = lazy(() => import("../Pages/Paints"));
const CanvasPages = lazy(() => import("../Pages/Canvas"));
const Catalog = lazy(() => import("../Pages/Catalog"));
const Home = lazy(() => import("../Pages/Home"));

export const dropdownRoutes = [
  {
    path: "/catalog/brushes",
    component: BrushesPages,
    name: "Кисти"
  },
  {
    path: "/catalog/paints",
    component: PaintsPages,
    name: "Краски"
  },
  {
    path: "/catalog/canvas",
    component: CanvasPages,
    name: "Холсты"
  }
];

export const routes = [
  ...dropdownRoutes,
  {
    path: "/catalog",
    component: Catalog,
    name: "Каталог"
  },
  {
    path: "/",
    component: Home,
    name: ""
  }
];
