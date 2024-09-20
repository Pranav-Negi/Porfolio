import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import Contact from "./Components/Contact";

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/home",
      element:<> <Navbar/><Home/></>
    },
    {
      path:"/",
      element:<> <Navbar/><Home/></>
    },
    {
      path:'/About',
      element:<> <Navbar/><About/></>
    },
    {
      path:'/Contact',
      element:<> <Navbar/><Contact/></>
    },
    {
      path:'/|',
      element:<> <Navbar/><Home/></>
    },
    {
      path:'/pranav.negi04@gmail.com',
      element:<> <Navbar/><Contact/></>
    }
  ])

  return <>
 
  <RouterProvider router={router}/>
  
  
  </>;
};

export default App;
