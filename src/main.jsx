import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import DashBoard from "./components/DashBoard/DashBoard";
import Statistics from "./components/Statistics/Statistics";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";
import { HelmetProvider } from "react-helmet-async";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "items/:product_id",
        element:<ItemDetails></ItemDetails>,
        loader:()=>fetch('/Data.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch('/Data.json')
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        loader:()=>fetch('/Data.json')
      },
      {
        path: "purchased",
        element: <PurchaseHistory></PurchaseHistory>,
        loader:()=>fetch('/Data.json')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
