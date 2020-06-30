import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class About extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>About</h1>
                <p className="lead">
                    Some text
                </p>
            </Jumbotron>
        );
    }
}
