import React from "react";
import { connect } from "react-redux";
import Column from "../Column";
import { dispatchRemoveColumn } from "../../actions/Dispatchers";
import { getColorCodeByItem } from "../Color";
import AddCardModal from "../Modals/AddCardModal";
import { toggleModal } from "../../actions/Actions";
import ModalTypes from "../../types/ModalTypes";

interface ColumnsProps {
    columns: Array<any>;
    colors: Array<any>;
    onRemoveColumn(columnId: string): void;
    onAddCardModal(modalId: string, columnId: string): void;
}

const Columns = ({ columns, colors, onRemoveColumn, onAddCardModal }: ColumnsProps) => (
    <>
        <AddCardModal className="success" />
        {columns && columns.length
            ? columns.map((column) => (
                  <Column
                      key={column.columnId}
                      columnId={column.columnId}
                      title={column.title}
                      backgroundColor={getColorCodeByItem({ colors, item: column })}
                      onRemoveColumn={() => onRemoveColumn(column.columnId)}
                      onAddCardModal={() => onAddCardModal(ModalTypes.ADD_CARD_MODAL_ID, column.columnId)}
                  />
              ))
            : "No columns yet!"}
    </>
);

const mapStateToProps = (state: any) => ({
    columns: state.columns,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch: any) => ({
    onRemoveColumn: (columnId: string) => dispatchRemoveColumn(dispatch, columnId),
    onAddCardModal: (modalId: string, columnId: string) => dispatch(toggleModal(modalId, { card: { columnId } })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Columns);
