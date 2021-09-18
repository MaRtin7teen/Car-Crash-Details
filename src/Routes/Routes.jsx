import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">

            </Route>

            <PrivateRoutes path="">

            </PrivateRoutes>
        </Switch>
    )
}

export default Routes;