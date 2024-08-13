import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://api.nasa.gov";
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_APOD_KEY;
axios.defaults.params["thumbs"] = "true";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster duration={1800} />
  </StrictMode>
);
