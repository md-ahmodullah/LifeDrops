import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Blogs from "../Pages/Blogs";
import CreateDonation from "../Pages/Dashboard/CreateDonation";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import MyDonationRequest from "../Pages/Dashboard/MyDonationRequest";
import Profile from "../Pages/Dashboard/Profile";
import DetailsPage from "../Pages/DetailsPage";
import DonationRequest from "../Pages/DonationRequest";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Search from "../Pages/Search";
import UpdatePage from "../Pages/UpdatePage";
import PrivateRoute from "../Router/PrivateRoute";
import AdminRouter from "./AdminRouter";

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
        <Dashboard />
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
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminRouter>
          <AdminDashboard />
        </AdminRouter>
      </PrivateRoute>
    ),
  },
]);
