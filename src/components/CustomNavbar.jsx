import React from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Brand>
          <Image
            src="favicon.ico"
            className="logo-pic"
            style={{ height: "22px", width: "22px" }}
          />
          {/* <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="pwerson-wrapper"></Col>
          </Row> */}
          <Link
            to="/"
            style={{
              marginLeft: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            airsip
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem
              eventKey={1}
              componentClass={Link}
              href="/"
              to="/"
              style={{ marginRight: "15px" }}
            >
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
              style={{ marginRight: "15px" }}
            >
              <Link to="/about" style={{ color: "white" }}>
                About
              </Link>
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/contactpage"
              to="/contactpage"
              style={{ marginRight: "15px" }}
            >
              <Link to="/contactpage" style={{ color: "white" }}>
                Contact Us
              </Link>
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/privacypolicy"
              to="/privacypolicy"
              style={{ marginRight: "15px" }}
            >
              <Link to="/privacypolicy" style={{ color: "white" }}>
                Privacy Policy
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
