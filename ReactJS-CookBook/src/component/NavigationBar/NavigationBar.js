import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './NavigationBar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    return (
      <Router>
        <Navbar expand="lg" className="navigationbar">
          <Navbar.Brand href="/home">React-Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey="#basic">
          <Nav.Link href="#basic">Basic</Nav.Link>
          <Nav.Link href="/redux">Redux</Nav.Link>
          <Nav.Link href="/ifsc">IFSC</Nav.Link>
          <Nav.Link href="/form">Simple Form</Nav.Link>
        </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>

    <Form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleLogout}>
                  Logout
                </button>
              </Form>

  </Navbar.Collapse>
</Navbar>
      </Router>
    );
  }
}

export default NavigationBar;
