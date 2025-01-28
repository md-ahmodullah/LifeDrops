import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Blogs from "../Pages/Blogs";
import CreateDonation from "../Pages/Dashboard/CreateDonation";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import AllDonationRequest from "../Pages/AdminDashboard/AllDonationRequest";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import ContentManagement from "../Pages/AdminDashboard/ContentManagement";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashboardLayout from "../Pages/Dashboard/DashBoardLayout";
import MyDonationRequest from "../Pages/Dashboard/MyDonationRequest";
import Profile from "../Pages/Dashboard/Profile";
import DetailsPage from "../Pages/DetailsPage";
import DonationRequest from "../Pages/DonationRequest";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Search from "../Pages/Search";
import UpdatePage from "../Pages/UpdatePage";
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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
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
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-donation-requests",
        element: (
          <PrivateRoute>
            <MyDonationRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create-donation-request",
        element: (
          <PrivateRoute>
            <CreateDonation />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-blood-donation-request",
        element: (
          <PrivateRoute>
            <AllDonationRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/content-management",
        element: (
          <PrivateRoute>
            <ContentManagement />
          </PrivateRoute>
        ),
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
