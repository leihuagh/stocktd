import React, { Component } from 'react';
import {  Container, Dropdown, Image, Menu, Icon, TransitionablePortal, Segment, Reveal, Header } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import logo from '../images/designs/logo-1.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  handleMenuClick = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    return (
      <div>
        <Menu fixed='top' borderless>
          <Container>
            <Menu.Item as='a' className="nav-logo">
              <Image size='small' src={logo} style={{ marginRight: '1.5em' }} />
            </Menu.Item>
            <Menu.Item as='a' className="no-hover" position="right" onClick={this.handleMenuClick}>
            <div className="nav-menu-icon" >
              <div id="nav-icon" className={this.state.navOpen ? 'open' : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            </Menu.Item>
          </Container>
        </Menu>
        {this.state.navOpen && (
          <TransitionablePortal transition={{animation: 'slide down', duration: 100}} onClose={this.handleMenuClick} open={this.state.navOpen}>
            <Segment className="menu-container" >
              <Header>This is a controlled portal</Header>
              <NavMenu />
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </TransitionablePortal>
        )}
      </div>
    )
  }
}

export default Navbar;
