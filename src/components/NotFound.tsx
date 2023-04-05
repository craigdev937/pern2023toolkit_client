import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const NotFound = () => {
    const error = useRouteError() as Error;

    return (
        <React.Fragment>
            <h1>That Page was not Found! 😨</h1>
            <pre>{error.message}</pre>
            <Link to="/">
                <button>Home</button>
            </Link>
        </React.Fragment>
    );
};


