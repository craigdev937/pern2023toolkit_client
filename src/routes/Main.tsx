import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Players } from "../pages/players/Players";
import { AddPlayer } from "../pages/add/AddPlayer";
import { EditPlayer } from "../pages/edit/EditPlayer";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Players />,
        errorElement: <NotFound />
    },
    {
        path: "/add",
        element: <AddPlayer />,
        errorElement: <NotFound />
    },
    {
        path: "/edit/:id",
        element: <EditPlayer />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


