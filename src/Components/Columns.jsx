import React from "react";
import {connect} from "react-redux";
import Column from "../Column";

function mapStateToProps(state) {
    return {
        columns: state.board.columns
    }
}

const ConnectedColumns = ({columns}) => (
    columns.map(column => (
        <Column key={column.columnId} title={column.title} />
    ))
);

const Columns = connect(
    mapStateToProps
)(ConnectedColumns);

export default Columns;