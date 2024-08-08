import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./lib/router/router.tsx";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { Toaster } from "sonner";

axios.defaults.baseURL = "https://api.nasa.gov";
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_APOD_KEY;
axios.defaults.params["thumbs"] = "true";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster duration={1800} />
  </StrictMode>
);
