import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home.jsx";
import {Ex01} from "../pages/ex01/Ex01.jsx";
import {Ex02} from "../pages/ex02/Ex02.jsx";
import {Ex03} from "../pages/ex03/Ex03.jsx";
import {Ex04} from "../pages/ex04/Ex04.jsx";
import {Atm} from "../pages/atm/Atm.jsx";
import Ex06 from "../pages/ex06/Ex06.jsx";
import Ex07 from "../pages/ex07/Ex07.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/ex01",
        element: <Ex01/>,
    },
    {
        path: "/ex02",
        element: <Ex02/>,
    },
    {
        path: "/ex03",
        element: <Ex03/>,
    },
    {
        path: "/ex04",
        element: <Ex04/>,
    },
    {
        path: "/atm",
        element: <Atm/>
    },
    {
        path: "/ex06",
        element: <Ex06/>
    },
    {
        path: "/ex07",
        element: <Ex07/>
    }
]);