import React from "react";
import LoginPage from "../LoginPage";
import history from "../../history";
import {Redirect, Route, Switch} from "react-router-dom";
import {Path} from "../../paths";
import {ConnectedRouter} from "connected-react-router";

export default function Navigation() {
    return (<ConnectedRouter history={history}>
        <Switch>
            <Route exact path={Path.LOGIN}><LoginPage /></Route>
            <Route path="*"><Redirect to={Path.LOGIN} /></Route>
        </Switch>
    </ConnectedRouter>);
}
