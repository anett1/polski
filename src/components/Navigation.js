import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { IoIosHeart } from "react-icons/io";
import theme from "../utils/theme";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      style={{ marginBottom: theme.interspace.standard }}
    >
      <Navbar.Brand to="/">
        <span style={{ color: "red" }}>
          <IoIosHeart />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="d-inline p-2 text-muted text-uppercase"
            exact
            to="/"
          >
            teaching
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="d-inline p-2 text-muted text-uppercase"
            to="/training"
          >
            training
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
