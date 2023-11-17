/* eslint-disable react-refresh/only-export-components */
import { Fragment } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { MAIN_ROUTES, CHILDREN_ROUTES } from "./routes";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../modules/Home/Home";

const AppMainLayout = () => (
  <Fragment>
    <Navbar />
    <Outlet />
  </Fragment>
);

export const mainRouter = createBrowserRouter([
  {
    element: <AppMainLayout />,
    children: [
      {
        path: MAIN_ROUTES.HOME,
        element: <Home />,
      },
      {
        path: CHILDREN_ROUTES.CARDS.NEW,
        element: <Home />,
      },
      {
        path: CHILDREN_ROUTES.CARDS.ITEM,
        element: <Home />,
      },
    ],
  },
]);
