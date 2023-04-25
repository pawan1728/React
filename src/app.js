import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Service from "./components/Service";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/ProfileClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return(
  <>
    <Header />
    {/* Outlet */}
    <Outlet />
    <Footer />
  </>
  )
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/services',
        element:<Service />
      },
      {
        path:'/contact',
        element:<Contact />,
        children:[
          {
          path:'profile',
          element:<Profile name="Pawan" />

        }
      ]    
      },
      {
        path:'resturants/:id',
        element:<ResturantMenu />        
      }
    ]
  }
]);

// root.render(<RouterProvider router={AppRouter} />);
root.render(<RouterProvider router={appRouter} />);
