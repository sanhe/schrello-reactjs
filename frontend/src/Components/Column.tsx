import React from "react";
import { Col } from "reactstrap";
import Button from "reactstrap/lib/Button";
import ColumnCards from "./Containers/ColumnCards";

interface ColumnProps {
    columnId: string;
    title: string;
    backgroundColor: string;
    onRemoveColumn(): void;
    onAddCardModal(): void;
}

const Column = ({ columnId, title, backgroundColor, onRemoveColumn, onAddCardModal }: ColumnProps) => (
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

export default Column;
