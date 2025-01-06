import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Error from "../pages/Error";
import Shop from "../pages/Shop";
import ContactUS from "../pages/ContactUS";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import MyCarts from "../pages/Dashboard/MyCarts";
import AllUsers from "../pages/Dashboard/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/ourmenu",
        element: <Menu></Menu>
      },
      {
        path: '/ourshop/:category',
        element: <Shop></Shop>
      },
      {
        path: '/contact',
        element: <ContactUS></ContactUS>
      }
    ],



  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/myCart',
        element: <MyCarts></MyCarts>
      },
      // Admin Related routes
      {
        path: '/dashboard/users',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);