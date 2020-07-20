import React from "react";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import Button from "reactstrap/lib/Button";
import ColumnCards from "./Containers/ColumnCards";

const Column = ({ columnId, title, backgroundColor, onRemoveColumn, onAddCardModal }) => (
    <Col className="col" style={{ backgroundColor }}>
        <div className="title">
            <Button color="danger" onClick={onRemoveColumn}>
                x
            </Button>
            <span>{title}</span>
        </div>
        <div className="cards">
            <ColumnCards columnId={columnId} />
        </div>
        <Button color="success" onClick={onAddCardModal} style={{ marginBottom: "10px" }}>
            Add a card
        </Button>
    </Col>
);

Column.defaultProps = {
    title: "",
};

Column.propTypes = {
    columnId: PropTypes.string.isRequired,
    title: PropTypes.string,
    onRemoveColumn: PropTypes.func.isRequired,
    onAddCardModal: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};

export default Column;
