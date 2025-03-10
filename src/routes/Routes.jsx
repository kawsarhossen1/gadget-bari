import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Newarrival from "../pages/Newarrival";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/new-arrival",
        element: <Newarrival />,
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default routes;
