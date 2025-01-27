import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Blogs from "../Pages/Blogs";
import CreateDonation from "../Pages/Dashboard/CreateDonation";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import MyDonationRequest from "../Pages/Dashboard/MyDonationRequest";
import Profile from "../Pages/Dashboard/Profile";
import DonationRequest from "../Pages/DonationRequest";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Search from "../Pages/Search";
import PrivateRoute from "../Router/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donationRequests",
        element: <DonationRequest />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/search",
        element: (
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/my-donation-requests",
        element: <MyDonationRequest />,
      },
      {
        path: "/dashboard/create-donation-request",
        element: <CreateDonation />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
