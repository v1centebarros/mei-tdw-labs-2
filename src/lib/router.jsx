import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import {Ex01} from "../pages/ex01/Ex01.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ex01",
    element: <Ex01 />,
    },
]);