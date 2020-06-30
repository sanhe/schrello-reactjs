import React from "react";
import { Col } from 'reactstrap';
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Button from "reactstrap/lib/Button";

class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col className="col" xs="3">
                <div className="title">{ this.props.title }</div>
                <Button color="danger" onClick={this.props.onRemoveColumn}>Remove</Button>
                <Container>
                    aaa
                </Container>
            </Col>
        );
    }
}

Column.propTypes = {
    title: PropTypes.string,
    onRemoveColumn: PropTypes.func.isRequired,
}

export default Column;