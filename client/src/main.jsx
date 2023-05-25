import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./routes";
import "./styles/main.scss";

const root = createRoot(document.getElementById("root"));
const router = createHashRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


