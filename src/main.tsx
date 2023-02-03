import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssVarsProvider } from "@mui/joy/styles";
import Navbar from "./components/Navbar";

import "./style/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <CssVarsProvider></CssVarsProvider>
  </React.StrictMode>
);
