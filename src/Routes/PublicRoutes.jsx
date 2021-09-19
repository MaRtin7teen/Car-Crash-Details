import React from 'react';
import { Redirect, Route } from "react-router-dom";

const PublicRoutes = ({auth, path, children}) => {
    return !auth ? 
    (
        <Route path={path}>
            {children}
        </Route>
    ) :
    (
        <Redirect push to="/list" />
    ) 
}

export default PublicRoutes;