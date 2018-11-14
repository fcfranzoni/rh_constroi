import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Notifications from 'react-notify-toast'
import { Container } from 'semantic-ui-react'
import Nav from '../../components/Nav/Nav'
//import './Style/index.css'

const propTypes = {
  pageActive: PropTypes.string,
  children: PropTypes.any
}

class Main extends Component {
  render() {
    return (
      <div className="page">
      <Nav />
        <Container className="page-container">{this.props.children}</Container>
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
