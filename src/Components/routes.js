import { lazy } from "react";

const AsyncBrushesPages = lazy(
  () => import("../Pages/Navigation/DropdownCatalog/Brushes") /* webpackChunkName: "brushes-page" */
);
const AsyncPaintsPages = lazy(
  () => import("../Pages/Navigation/DropdownCatalog/Paints") /* webpackChunkName: "paints-page" */
);
const AsyncCanvasPages = lazy(
  () => import("../Pages/Navigation/DropdownCatalog/Canvas") /* webpackChunkName: "canvas-page" */
);
const AsyncCatalog = lazy(
  () => import("../Pages/Navigation/Catalog") /* webpackChunkName: "catalog-page" */
);
const AsyncHome = lazy(
  () => import("../Pages/Navigation/Home") /* webpackChunkName: "home-page" */
);

const AsyncLogin = lazy(
  () => import("../Pages/LogIn") /* webpackChunkName: "logIn-page" */
);
const AsyncRegistration = lazy(
  () =>
    import("../Pages/Registration") /* webpackChunkName: "registration-page" */
);

const AsyncHelpPage = lazy(
  () => import("../Pages/HelpPage/HelpPage") /* webpackChunkName: "help-page" */
);
const AsyncPersonalCard = lazy(
  () =>
    import(
      "../Pages/HelpPage/PersonalCard"
    ) /* webpackChunkName: "personalCard-page" */
);
const AsyncPayment = lazy(
  () =>
    import("../Pages/HelpPage/Payment") /* webpackChunkName: "payment-page" */
);
const AsyncReturnOrderPage = lazy(
  () =>
    import(
      "../Pages/HelpPage/ReturnPage"
    ) /* webpackChunkName: "returnOrder-page" */
);
const AsyncDeliveryPage = lazy(
  () =>
    import(
      "../Pages/HelpPage/DeliveryPage"
    ) /* webpackChunkName: "delivery-page" */
);

const AsyncArtReproduct = lazy(
  () =>
    import(
      "../Pages/Navigation/DropdownCatalog/ArtReproductions"
    ) /* webpackChunkName: "artReproductions-page" */
);
const AsyncArtists = lazy(
  () => import("../Pages/Navigation/Artists") /* webpackChunkName: "artist-page" */
);
const AsyncDesigners = lazy(
  () => import("../Pages/Navigation/Designers") /* webpackChunkName: "designers-page" */
);
const AsyncAboutUs = lazy(
  () => import("../Pages/Navigation/AboutUs") /* webpackChunkName: "aboutUs-page" */
);
const AsyncContacts = lazy(
  () => import("../Pages/Navigation/Contacts") /* webpackChunkName: "contacts-page" */
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
    path: "/catalog/artreproductions",
    component: AsyncArtReproduct,
    name: "Репродукции картин"
  }
];

export const helpRoutes = [
  {
    path: "/helppage/personalcard",
    component: AsyncPersonalCard,
    name: "Карта лояльности"
  },
  {
    path: "/helppage/paymentmethods",
    component: AsyncPayment,
    name: "Способы оплаты"
  },
  {
    path: "/helppage/returnorder",
    component: AsyncReturnOrderPage,
    name: "Возврат и обмен товара"
  },
  {
    path: "/helppage/delivery",
    component: AsyncDeliveryPage,
    name: "Доставка"
  }
];

export const routes = [
  ...dropdownRoutes,
  ...helpRoutes,
  {
    path: "/catalog",
    component: AsyncCatalog,
    name: "Catalog"
  },
  {
    path: "/artists",
    component: AsyncArtists,
    name: "Artisits"
  },
  {
    path: "/designers",
    component: AsyncDesigners,
    name: "Designers"
  },
  {
    path: "/aboutus",
    component: AsyncAboutUs,
    name: "About us"
  },
  {
    path: "/contacts",
    component: AsyncContacts,
    name: "Contacts"
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
    path: "/helppage",
    component: AsyncHelpPage,
    name: "Help Page"
  },
  {
    path: "/",
    component: AsyncHome,
    name: ""
  }
];
