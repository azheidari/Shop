import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./navigations/Root";
import ErrorPage from "./navigations/ErrorPage";
import Home from "./pages/product/ProductPage";
import Electronics from "./pages/product/Electronics";
import Menclothing from "./pages/product/Menclothing";
import Womenclothing from "./pages/product/Womenclothing";
import Jewelery from "./pages/product/Jewelery";
import ProductDetail from "./pages/product/ProductDetail";
import ElectronicsRootLayout from "./navigations/ElectronicsRootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ":id",
        children: [{ index: true, element: <ProductDetail /> }],
      },
      
      {
        path: "electronics",
        // element: <ElectronicsRootLayout />,
        children: [
          { index: true, element: <Electronics /> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetail /> },
            ],
          },
        ],
      },
      {
        path: "jewelery",
        // element: <ElectronicsRootLayout />,
        children: [
          { index: true, element: <Jewelery/> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetail /> },
            ],
          },
        ],
      },
      {
        path: ":women'sclothing",
        // element: <ElectronicsRootLayout />,
        children: [
          { index: true, element: <Womenclothing /> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetail /> },
            ],
          },
        ],
      },
      {
        path: ":men's clothing",
        // element: <ElectronicsRootLayout />,
        children: [
          { index: true, element: <Menclothing /> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetail /> },
            ],
          },
        ],
      },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
