import React from 'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({auth, path, children}) => {

    return auth ? 
    (
        <Route path={path}>
            {children}
        </Route>
    ) :
    (
        <Redirect push to="/register" />
    ) 
}

export default PrivateRoutes;