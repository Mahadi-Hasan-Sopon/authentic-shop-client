import React from "react";
import ReactDOM from "react-dom/client";
import "daisyui/dist/full.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/PublicRoutes.jsx";
import AuthContextProvider from "./Contexts/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </React.StrictMode>
);
