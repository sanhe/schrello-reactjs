import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import "../styles/App.css";
import About from "./About";
import data from "../api/data.json";
import Board from "./Board";

const App = () => (
    <Router>
        <NavBar />
        <Container>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route exact path="/" render={(props) => <Board data={data} {...props} />} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route exact path="/about" render={(props) => <About {...props} />} />
        </Container>
    </Router>
);

export default App;
