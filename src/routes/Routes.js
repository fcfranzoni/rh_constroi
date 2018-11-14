import React from 'react'
import {
  Router, Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import Home from '../containers/Home'
import User from '../containers/User'
import Login from '../containers/Login'
import History from './History';
import Nav from '../components/Nav/Nav';


const Routes = () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />     
    <Route path={`${process.env.PUBLIC_URL}/home`} component={Home} />
    <Route path={`${process.env.PUBLIC_URL}/user`} component={User} />
    <Redirect to='/' />
  </Switch>
);

export default Routes
