import React from "react";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import Button from "reactstrap/lib/Button";
import ColumnCards from "./Containers/ColumnCards";
import AddCardModal from "./Modals/AddCardModal";

const Column = ({ columnId, title, onRemoveColumn }) => (
    <Col className="col">
        <div className="title">
            <Button color="danger" onClick={onRemoveColumn}>
                x
            </Button>
            <span>{title}</span>
        </div>
        <div className="cards">
            <ColumnCards columnId={columnId} />
        </div>
        <AddCardModal className="success" buttonLabel="Add a card" columnId={columnId} />
    </Col>
);

Column.defaultProps = {
    title: "",
};

Column.propTypes = {
    columnId: PropTypes.string.isRequired,
    title: PropTypes.string,
    onRemoveColumn: PropTypes.func.isRequired,
};

export default Column;
