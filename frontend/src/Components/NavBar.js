import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavItem } from "reactstrap";
import AddColumn from "./Containers/AddColumn";
import AddColumnButton from "./AddColumnButton";
import AddColumnModal from "./Modals/AddColumnModal";

const NavBar = () => (
    <div>
        <Navbar color="dark" dark expand="md" fixed="top">
            <Container fluid>
                <Nav navbar>
                    <NavItem>
                        <RouterNavLink to="/" className="nav-link" exact>
                            Schrello
                        </RouterNavLink>
                    </NavItem>
                </Nav>
                <Nav className="justify-content-end" navbar>
                    <NavItem>
                        {/*<AddColumn />*/}
                        <AddColumnModal />
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
