import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "favorites", element: <Favorites /> },
      { path: "about", element: <About /> },
      { path: "posts/:id", element: <PostPage /> },
    ],
  },
]);
