import React from 'react'
import {
    Router, Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import { history } from '../_routes/history';
import  Home  from '../containers/Home'


const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to='/' />
        </Switch>
    </Router>
);


export default Routes
