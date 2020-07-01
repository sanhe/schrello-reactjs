import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import '../styles/App.css';
import About from "./About";
import data from "../api/data.json";
import Board from "./Board";

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <Container>
                        <Route exact path="/"
                               render={(props) =>
                                   <Board data={data} {...props} />
                               } />
                        <Route exact path="/about"
                               render={(props) =>
                                   <About {...props} />
                               } />
                    </Container>
                </Router>
            </>
        );
    }
}

export default App;
