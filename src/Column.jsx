import React from "react";
import { Col } from 'reactstrap';
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";

class Column extends React.Component {
    render() {
        return (
            <Col className="col" xs="3">
                <div className="title">{ this.props.title }</div>
                <Container>
                    aaa
                </Container>
            </Col>
        );
    }
}

Column.propTypes = {
    title: PropTypes.string
}

export default Column;