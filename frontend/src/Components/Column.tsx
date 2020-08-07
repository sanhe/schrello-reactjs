import React from "react";
import { Col } from "reactstrap";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ColumnCards from "./Containers/ColumnCards";

interface ColumnProps {
    columnId: string;
    title: string;
    backgroundColor: string;
    onRemoveColumn: () => void;
    onAddCardModal: () => void;
}

const Column = ({ columnId, title, backgroundColor, onRemoveColumn, onAddCardModal }: ColumnProps) => (
    <Col className="col" style={{ backgroundColor }}>
        <div className="title">
            <IconButton size="small" aria-label="delete" color="secondary" onClick={onRemoveColumn}>
                <DeleteIcon />
            </IconButton>
            <span>{title}</span>
        </div>
        <div className="cards">
            <ColumnCards columnId={columnId} />
        </div>
        <Button color="primary" onClick={onAddCardModal} style={{ marginBottom: "10px" }}>
            + Add a card
        </Button>
    </Col>
);

export default Column;
