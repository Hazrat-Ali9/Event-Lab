import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=> fetch('/data.json')
      },
      {
        path: '/about',
        element:<PrivateRoutes><About /></PrivateRoutes>
      },
      {
        path: '/blog',
        element:<PrivateRoutes><Blog /></PrivateRoutes>
      },
      {
        path: '/contact',
        element:<PrivateRoutes><Contact /></PrivateRoutes>
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/signUp',
        element:<SignUp />        
      },
      {
        path: '/details/:id',
        element: <PrivateRoutes><ServiceDetails /></PrivateRoutes>,
        loader:()=> fetch('/data.json')
      },
    ]
  }
])