import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import CarCrashList from '../Pages/CarCrashList';
import CrashDetails from '../Pages/CrashDetails';
// import Login from '../Pages/Login';
// import Register from '../Pages/Register';
// import { loadData } from '../Utils/LocalStorage';
// import PrivateRoutes from './PrivateRoutes';
// import PublicRoutes from './PublicRoutes';

const Routes = () => {

    // const auth = loadData("auth") || false;

    return (
        <Switch>
            {/* <PublicRoutes auth={auth} path="/register">
                <Register />
            </PublicRoutes>

            <PublicRoutes auth={auth} exact path="/login">
                <Login />
            </PublicRoutes>

            <PrivateRoutes auth={auth} exact path="/list">
                <CarCrashList />
            </PrivateRoutes>

            <PrivateRoutes auth={auth} exact path="/list/details/:id">
                <CrashDetails />
            </PrivateRoutes> */}

            <Route exact path="/list">
                <CarCrashList />
            </Route>

            <Route exact path="/list/details/:id">
                <CrashDetails />
            </Route>

            <Route>
                <Redirect push to="/list" />
            </Route>
        </Switch>
    )
}

export default Routes;