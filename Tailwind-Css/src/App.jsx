import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import {createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";



const App = () => {

  let Router = createBrowserRouter(
    [
      {
        path:'/auth',
        element:<><Navbar /> <Outlet /></>,
        children:[
          {path:'login',element:<Login></Login>},
          {path:'signup',element:<Signup></Signup>}
        ]
      }
      ,
      {path:'/',element: <><Navbar /><Home></Home></> }
    ]
  );

  return (
    <div className="container w-full m-auto ">
      <RouterProvider router={Router}/>
    </div>
  );
};

export default App;
