import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Column from "../Column";
import { dispatchRemoveColumn } from "../../actions/Dispatchers";
import { getColorCodeByItem } from "../Color";
import AddCardModal from "../Modals/AddCardModal";
import { toggleModal } from "../../actions/Actions";
import ModalTypes from "../../types/ModalTypes";

// eslint-disable-next-line no-shadow
const Columns = ({ columns, colors, removeColumn, onAddCardModal }) => (
    <>
        <AddCardModal className="success" buttonLabel="Add a card" />
        {columns && columns.length
            ? columns.map((column) => (
                  <Column
                      key={column.columnId}
                      columnId={column.columnId}
                      title={column.title}
                      backgroundColor={getColorCodeByItem(colors, column)}
                      onRemoveColumn={() => removeColumn(column.columnId)}
                      onAddCardModal={() => onAddCardModal(ModalTypes.ADD_CARD_MODAL_ID, column.columnId)}
                  />
              ))
            : "No columns yet!"}
    </>
);

const mapStateToProps = (state) => ({
    columns: state.columns,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch) => ({
    removeColumn: (columnId) => dispatchRemoveColumn(dispatch, columnId),
    onAddCardModal: (modalId, columnId) => dispatch(toggleModal(modalId, { card: { columnId } })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Columns);

Columns.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            columnId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    colors: PropTypes.array.isRequired,
    removeColumn: PropTypes.func.isRequired,
    onAddCardModal: PropTypes.func.isRequired,
};
