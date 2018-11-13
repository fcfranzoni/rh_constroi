import React from 'react'
import Home from '../pages/Home/Home';
import { Router, Route, browserHistory } from 'react-router'

class Routes extends React.Component {

    checkAuthentication() {
        if (!window.sessionStorage.getItem('auth_userData') && process.env.NODE_ENV !== "development") {
            window.location.href = "/auth/login";
        }
    }

    render() {
        return (
            <Router history={browserHistory} >
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} /*onEnter={this.checkAuthentication}*/ />
                {/* <Route exact path={`${process.env.PUBLIC_URL}/deliverylisting`} component={DeliveryListing} onEnter={this.checkAuthentication}/> */}
            </Router>
        )
    }
}

export default Routes
