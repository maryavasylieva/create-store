import { lazy } from "react";
//TODO: set webpack chunk name to async components
const AsyncBrushesPages = lazy(() => import("../Pages/Brushes"));
const AsyncPaintsPages = lazy(() => import("../Pages/Paints"));
const AsyncCanvasPages = lazy(() => import("../Pages/Canvas"));
const AsyncCatalog = lazy(() => import("../Pages/Catalog"));
const AsyncHome = lazy(() => import("../Pages/Home"));

const AsyncLogin = lazy(() => import("../Pages/LogIn"));
const AsyncRegistration = lazy(() => import("../Pages/Registration"));

const AsyncHelpPage = lazy(() => import("../Pages/HelpPage/HelpPage"));
const AsyncPersonalCard = lazy(() => import("../Pages/HelpPage/PersonalCard"));
const AsyncPayment = lazy(() => import("../Pages/HelpPage/Payment"));
const AsyncReturnPage = lazy(() => import("../Pages/HelpPage/ReturnPage"));
const AsyncDeliveryPage = lazy(() => import("../Pages/HelpPage/DeliveryPage"));

const AsyncArtReproduct = lazy(() => import("../Pages/ArtReproductions"));
const AsyncArtists = lazy(() => import("../Pages/Artists"));
const AsyncDesigners = lazy(() => import("../Pages/Designers"));
const AsyncAboutUs = lazy(() => import("../Pages/AboutUs"));
const AsyncContacts = lazy(() => import("../Pages/Contacts"));

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
    path: "/personalCard",
    component: AsyncPersonalCard,
    name: "Карта лояльности"
  },
  {
    path: "/paymentMethods",
    component: AsyncPayment,
    name: "Способы оплаты"
  },
  {
    path: "/return",
    component: AsyncReturnPage,
    name: "Возврат и обмен товара"
  },
  {
    path: "/delivery",
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
    path: "/helpPage",
    component: AsyncHelpPage,
    name: "HelpPage"
  },
  {
    path: "/",
    component: AsyncHome,
    name: ""
  }
];
