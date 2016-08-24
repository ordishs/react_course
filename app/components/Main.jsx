import React, {PropTypes} from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default class Main extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>Channel Chat</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href='#'>Link</NavItem>
              <NavItem eventKey={2} href='#'>Link</NavItem>
              <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to='/help'>
                <NavItem eventKey={4}>Help</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired
}
