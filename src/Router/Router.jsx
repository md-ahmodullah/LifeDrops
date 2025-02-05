import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Blogs from "../Pages/Blogs";
import CreateDonation from "../Pages/Dashboard/CreateDonation";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import Dashboard from "../Layout/Dashboard";
import AddBlog from "../Pages/AddBlog";
import AdminHome from "../Pages/AdminDashboard/AdminHome";
import AllDonationRequest from "../Pages/AdminDashboard/AllDonationRequest";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import ContentManagement from "../Pages/AdminDashboard/ContentManagement";
import BlogDetails from "../Pages/BlogDetails";
import DonorHome from "../Pages/Dashboard/DonorHome";
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
        path: "/blogs/:id",
        element: <BlogDetails />,
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
            <DonorHome />
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
        path: "/dashboard/adminHome",
        element: (
          <PrivateRoute>
            <AdminHome />
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
      {
        path: "/dashboard/content-management/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />
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
