import React from "react";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Button from "reactstrap/lib/Button";
import ColumnCards from "./Containers/ColumnCards";

const Column = ({ columnId, title, onRemoveColumn }) => (
    <Col className="col" xs="3">
        <div className="title">{title}</div>
        <Button color="danger" onClick={onRemoveColumn}>
            Remove
        </Button>
        <Container>
            <ColumnCards columnId={columnId} />
        </Container>
    </Col>
);

Column.propTypes = {
    columnId: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    title: PropTypes.string,
    onRemoveColumn: PropTypes.func.isRequired,
};

export default Column;
