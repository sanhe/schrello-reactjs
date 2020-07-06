import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavItem } from "reactstrap";
import AddColumn from "./Containers/AddColumn";

const NavBar = () => (
    <div>
        <Navbar color="dark" dark expand="md" fixed="top">
            <Container>
                <Nav navbar>
                    <NavItem>
                        <RouterNavLink to="/" className="nav-link" exact>
                            Schrello
                        </RouterNavLink>
                    </NavItem>
                </Nav>
                <Nav className="justify-content-end" navbar>
                    <NavItem>
                        <AddColumn />
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/about" className="nav-link" exact>
                            About
                        </RouterNavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    </div>
);

export default NavBar;
