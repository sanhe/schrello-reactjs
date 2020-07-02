import React from "react";
import {connect} from "react-redux";
import Column from "../Column";
import {removeColumn} from "../../actions/Actions";
import PropTypes from "prop-types";

const Columns = ({columns, removeColumn}) => (
    <>
        {columns && columns.length
            ? columns.map(column => (
                <Column
                    key={column.columnId}
                    columnId={column.columnId}
                    title={column.title}
                    onRemoveColumn={() => removeColumn(column.columnId)}
                />
            ))
            : "No columns yet!"}
    </>
);

const mapStateToProps = state => ({
    columns: state.columns,
});

const mapDispatchToProps = dispatch => ({
    removeColumn: (columnId) => dispatch(removeColumn(columnId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Columns);

Columns.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            columnId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    removeColumn: PropTypes.func.isRequired,
};
