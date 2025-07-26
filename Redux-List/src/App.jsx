import "./App.css";
import Cart from "./components/UI/Cart";
import Error from "./components/UI/Error";
import Home from "./components/UI/Home";
import Navbar from "./components/UI/Navbar";
import Product from "./components/UI/Product";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const ErrorLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element:<ErrorLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product",
          element: <Product />,
        },
        ,
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
