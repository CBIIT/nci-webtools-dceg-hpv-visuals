import { Navigate } from "react-router-dom";
import App from "./app.jsx";
import Home from "./modules/home/home.jsx";
import Explore from "./modules/explore/explore.jsx";
import About from "./modules/about/about.jsx";

export const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
        end: true,
      },
      {
        path: "/explore",
        element: <Explore />,
        title: "Explore",
        end: false,
      },
      {
        path: "/about",
        element: <About />,
        title: "About",
        end: true,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
        hide: true,
      },
    ],
  },
];
