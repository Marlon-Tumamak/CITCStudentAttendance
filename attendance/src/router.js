import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./pages/header";
import Home from "./pages/home";
import Student from "./pages/student";
import EditRecord from "./pages/EditRecord";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/student/:id",
                element: <Student />,
            },
            {
                path: "/edit-record/:id",
                element: <EditRecord />,
            }
        ]
    }
]);

export default router;