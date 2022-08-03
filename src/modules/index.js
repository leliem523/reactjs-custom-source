import { lazy } from "react";

export default [
  { key: "Home", path: "/", Component: lazy(() => import('./home/pages')) },
  { key: "Contact", path: "/contact", Component: lazy(() => import('./contact/pages')) },
];
