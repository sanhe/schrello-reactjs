import React from "react";
import { Button } from "reactstrap";

interface AddColumnButtonProps {
    onAddColumn(title: string, currentBoardId: string): void;
    currentBoardId: string;
}

const AddColumnButton = ({ currentBoardId, onAddColumn }: AddColumnButtonProps) => (
    <Button onClick={() => onAddColumn("Def title", currentBoardId)}>+</Button>
);

export default AddColumnButton;
