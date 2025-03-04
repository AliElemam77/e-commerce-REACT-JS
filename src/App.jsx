import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import CounterContextPorvider from "./Context/counterContext";
import UserContextProvider from "./Context/userContext";
import ProtectRoutes from "./components/ProtectRoutes/ProtectRoutes";
import ProductDetails from "./components/productDetails/productDetails";
import CartContextProvider from "./Context/cartContext";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Checkout from "./components/Checkout/Checkout";
import Allorders from "./components/Allorders/Allorders";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectRoutes>
            <Home />
          </ProtectRoutes>
        ),
      },
      {
        path: "product",
        element: (
          <ProtectRoutes>
            <Products />
          </ProtectRoutes>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectRoutes>
            <Cart />
          </ProtectRoutes>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectRoutes>
            <Brands />
          </ProtectRoutes>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectRoutes>
            <Categories />
          </ProtectRoutes>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectRoutes>
            <Checkout />
          </ProtectRoutes>
        ),
      },
      {
        path: "allOrders",
        element: (
          <ProtectRoutes>
            <Allorders />
          </ProtectRoutes>
        ),
      },
      {
        path: "productDetails/:id/:category",
        element: <ProductDetails />,
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <CounterContextPorvider>
            <RouterProvider router={routes}></RouterProvider>
            <Toaster />
          </CounterContextPorvider>
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
