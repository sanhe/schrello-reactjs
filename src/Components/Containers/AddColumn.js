import { connect } from "react-redux";
import AddColumnButton from "../AddColumnButton";
import { addColumn } from "../../actions/Actions";

const mapStateToProps = (state) => ({
    currentBoardId: state.currentBoardId,
});

const mapDispatchToProps = (dispatch) => ({
    onAddColumn(title, boardId) {
        dispatch(addColumn(title, boardId));
    },
});

const AddColumn = connect(mapStateToProps, mapDispatchToProps)(AddColumnButton);

export default AddColumn;
