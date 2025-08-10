import React from "react";
import { createBrowserRouter } from "react-router";
import NotFound from "../components/NotFound";
import Root from "../pages/Root";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FeaturedArtifacts from "../pages/FeaturedArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails";
import PrivateRoute from "./PrivateRoute";
import AllArtifacts from "../pages/AllArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import UpdateArtifact from "../pages/UpdateArtifact";
import AddArtifact from "../pages/AddArtifact";
import LikedArtifacts from "../pages/LikedArtifacts";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
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
        path: "/all-artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "/feature",
        element: (
          <PrivateRoute>
            <FeaturedArtifacts />
          </PrivateRoute>
        ),
      },

      {
        path: "/artifact/:id",
        element: (
            <ArtifactDetails />
        ),
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifact",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
