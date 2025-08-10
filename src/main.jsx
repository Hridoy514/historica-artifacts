import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import { Router } from "./routers/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
