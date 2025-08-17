import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import BlogDetails from "../components/Home/BlogDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/blogs/:id",
        Component: BlogDetails,
      },
    ],
  },
]);

export default router;
