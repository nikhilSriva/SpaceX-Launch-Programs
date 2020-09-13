import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Landing from "./Modules/Landing";

export const makeMainRoutes = () => {
    return (
        <Switch>
            <Route path="/" render={(props) => <Landing {...props} />}/>
        </Switch>
    );
}

