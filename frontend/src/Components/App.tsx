import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import "../styles/App.css";
import About from "./About";
import Board from "./Board";

const App = () => (
    <Router>
        <NavBar />
        <Container fluid>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route exact path="/" render={(props: any) => <Board {...props} />} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route exact path="/about" render={(routeProps: any) => <About {...routeProps} />} />
        </Container>
    </Router>
);

export default App;
