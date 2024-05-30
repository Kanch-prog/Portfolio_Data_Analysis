import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed; 
  top: 0; 
  width: 100%;
  background: #F5F5F5;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  z-index: 1000; 
`;

const StyledNavLink = styled(NavLink)`
  color: #808080;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;

  &:hover {
    color: #ccc;
  }

  &.active {
    color: #000; 
  }

  &.active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: green;
    bottom: 0;
    left: 0;
  }

  font-family: var(--font-family-monospace);
`;

const NavBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/" exact>
        HOME
      </StyledNavLink>
      <StyledNavLink to="/intro" exact>
        INTRO
      </StyledNavLink>
      <StyledNavLink to="/portfolio">
        PORTFOLIO
      </StyledNavLink>
      <StyledNavLink to="/contact">
        CONTACT
      </StyledNavLink>
    </Nav>
  );
}

export default NavBar;
