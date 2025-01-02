import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Error from "../pages/Error";
import Shop from "../pages/Shop";
import ContactUS from "../pages/ContactUS";


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
        path : '/contact',
        element : <ContactUS></ContactUS>
      }
    ]
  },
]);