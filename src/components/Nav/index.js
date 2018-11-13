import React, { Component } from "react";
//import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
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


class Nav extends Component {
   
    render() {
       
        return (
            <div className="nav">
                <Segment inverted color="blue">
                    <Menu inverted pointing secondary>
                        <Container>
                            <Menu.Header className="nav-menu-header">
                            </Menu.Header>
                            <Menu.Item active>Home</Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </div>
        );
    }
}

export default Nav;
