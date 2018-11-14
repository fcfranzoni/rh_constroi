import React, { Component } from "react";
//import { observer, inject } from "mobx-react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from "lodash";
import {
    Container,
    Dropdown,
    Menu,
    Segment,
    Image,
    Search
} from "semantic-ui-react";
//import "./Style/index.css";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: props.history.location.pathname,
            env: process.env.REACT_APP_NODE_ENV,
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event, sub) {
        this.setState({ activeMenu: sub.url });
        const { history } = this.props;
        history.push(process.env.PUBLIC_URL + sub.url);
    }

    portalUrl() {
        const { env } = this.state;
        switch (env) {
            case 'production':
                return '';
            case 'stage':
                return '';
            case 'development':
                return process.env.PUBLIC_URL;
            default:
                return process.env.PUBLIC_URL;
        }
    }

    render() {

        const { activeMenu } = this.state;

        return (
            <div className="nav">
                <Segment inverted color="blue">
                    <Menu inverted pointing secondary>
                        <Container>
                            <Menu.Header className="nav-menu-header">
                            </Menu.Header>
                            <Menu.Item
                                name="/"
                                active={activeMenu === '/home'}
                                onClick={this.handleItemClick}
                                url="/home"
                                to={`${process.env.PUBLIC_URL}/home`}
                            >Home
                            </Menu.Item>
                            <Menu.Item
                                name="/"
                                active={activeMenu === '/user'}
                                onClick={this.handleItemClick}
                                url="/user"
                            >
                                User
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </div>
        );
    }
}

Nav.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Nav);
