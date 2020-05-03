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
const AsyncArtReproduct = lazy(() => import("../Pages/ArtReproductions"));
const AsyncArtists = lazy(() => import("../Pages/Artists"));
const AsyncDesigners = lazy(() => import("../Pages/Designers"));
const AsyncAboutUs = lazy(() => import("../Pages/AboutUs"));
const AsyncContacts = lazy(() => import("../Pages/Contacts"));
const AsyncGraphicsPages = lazy(() => import("../Pages/Graphics.js"));
const AsyncPaperPages = lazy(() => import("../Pages/Paper.js"));
const AsyncCartPage = lazy(
  () => import("../Pages/CartPage.js") /* webpackChunkName: "cart-page" */
);
const AsyncProductPage = lazy(
  () => import("../Pages/ProductPage.js") /* webpackChunkName: "product-page" */
);

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
  },
  {
    path: "/catalog/paper",
    component: AsyncPaperPages,
    name: "Бумага"
  },
  {
    path: "/catalog/graphics",
    component: AsyncGraphicsPages,
    name: "Графика"
  },
  {
    path: "/catalog/artreproductions",
    component: AsyncArtReproduct,
    name: "Репродукции картин"
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
    path: "/artists",
    component: AsyncArtists,
    name: "Художникам"
  },
  {
    path: "/designers",
    component: AsyncDesigners,
    name: "Дизайнерам"
  },
  {
    path: "/aboutus",
    component: AsyncAboutUs,
    name: "Про нас"
  },
  {
    path: "/contacts",
    component: AsyncContacts,
    name: "Контакты"
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
    path: "/cart",
    component: AsyncCartPage,
    name: "Cart"
  },
  {
    path: "/main/:id",
    component: AsyncProductPage,
    name: "Product Page"
  },
  {
    path: "/main",
    component: AsyncHome,
    name: "Main"
  },
  {
    path: "/",
    component: AsyncHome,
    name: ""
  }
];
