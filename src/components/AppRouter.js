import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = false
    console.log(publicRoutes)
    return (
        <Switch>

            {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>)}

            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} />)}

        </Switch>
    );
}

export default AppRouter
