import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Notifications from 'react-notify-toast'
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Nav from '../../components/Nav/Nav'
//import './Style/index.css'

const propTypes = {
  pageActive: PropTypes.string
};

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userOnline: true,
      showLoad: false
    };
    // this.verifyUserloggedIn();
  }
  
  render() {
    
    if (!this.state.userOnline) {
      return <Redirect to='/' />;
    }

    return (
      <div className="page">
      <Nav />
      <Container style={{ marginTop: '8em' }}>
          {this.props.children}
        </Container>        
        {/* <Notifications options={{ zIndex: 1001 }} /> */}
      </div>
    )
  }
}

Main.propTypes = propTypes
Main.defaultProps = {
  pageActive: 'home'
}

export default Main
