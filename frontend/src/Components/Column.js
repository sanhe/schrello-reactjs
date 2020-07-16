import React from "react";
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Button from "reactstrap/lib/Button";
import ColumnCards from "./Containers/ColumnCards";
import AddCardModal from "./Modals/AddCardModal";

const Column = ({ columnId, title, onRemoveColumn, onAddCard }) => (
    <Col className="col" xs="3">
        <div className="title">{title}</div>
        <Button color="danger" onClick={onRemoveColumn}>
            Remove
        </Button>
        <AddCardModal className="success" buttonLabel="Add card" onAddCard={onAddCard} columnId={columnId} />
        <Container>
            <ColumnCards columnId={columnId} />
        </Container>
    </Col>
);

Column.defaultProps = {
    title: "",
};

Column.propTypes = {
    columnId: PropTypes.string.isRequired,
    title: PropTypes.string,
    onRemoveColumn: PropTypes.func.isRequired,
    onAddCard: PropTypes.func.isRequired,
};

export default Column;
