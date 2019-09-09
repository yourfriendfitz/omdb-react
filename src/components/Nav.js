import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";

const StyledNavbar = styled(Navbar)`
  background: ${Palette.Secondary};
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  color: ${Palette.DarkText};
`;

const StyledNavbarToggler = styled(NavbarToggler)`
  :focus {
    outline: none;
  }
`;

const BootstrapNavbar = () => {
  const initialState = {
    collapsed: true
  };

  const [state, setState] = useState(initialState);

  const toggleNavbar = () => {
    setState({
      collapsed: !state.collapsed
    });
  };
  return (
    <div>
      <StyledNavbar color="faded" dark>
        <StyledNavbarBrand href="/" className="mr-auto">
          OMDB Movies{" "}
          <span role="img" aria-label="movie">
            🍿
          </span>
        </StyledNavbarBrand>
        <StyledNavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                API
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    </div>
  );
};

export default BootstrapNavbar;
