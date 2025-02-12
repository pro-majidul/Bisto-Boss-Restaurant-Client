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
import AdminRoutes from "../private/AdminRoutes";
import AddItems from "../pages/Dashboard/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import UsersHome from "../pages/Dashboard/UsersHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserReservation from "../pages/Dashboard/UserReservation";
import AddReview from "../pages/Dashboard/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking";
import ManageBooking from "../pages/Dashboard/ManageBooking";


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
      // normal users routes 
      {
        path: '/dashboard/usersHome',
        element: <UsersHome></UsersHome>
      },
      {
        path: '/dashboard/reservation',
        element: <UserReservation></UserReservation>
      },
      {
        path: '/dashboard/myCart',
        element: <MyCarts></MyCarts>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/addReview',
        element: <AddReview></AddReview>
      },
      {
        path: '/dashboard/myBooking',
        element: <MyBooking></MyBooking>
      },

      // Admin Related routes
      {
        path: '/dashboard/adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: '/dashboard/users',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: '/dashboard/additems',
        element: <AdminRoutes> <AddItems></AddItems> </AdminRoutes>
      },
      {
        path: '/dashboard/manageitems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: '/dashboard/booking',
        element: <AdminRoutes><ManageBooking></ManageBooking></AdminRoutes>
      },
      {
        path: '/dashboard/menu/update/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>
      }
    ]
  }
]);