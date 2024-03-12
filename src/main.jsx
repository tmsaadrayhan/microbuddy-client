import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
