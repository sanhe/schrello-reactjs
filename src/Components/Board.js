import React from "react";
import { Row } from 'reactstrap';
import Loader from "./Loader";
import Columns from "./Containers/Columns";
import {connect} from "react-redux";
import { addColumn } from "../actions/Actions";
import {hideModal, showModal} from "../actions/ModalActions";
import PropTypes from "prop-types";
import ModalRoot from "./Modals/ModalRoot";
import {DEFAULT_BOARD_ID} from "../reducers/initialStates";

const mapDispatchToProps = dispatch => ({
    addColumn: (title, boardId) => dispatch(addColumn(title, boardId)),
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }))
    },
});

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.addColumnHandler = this.addColumnHandler.bind(this);
        this.openAlertModal = this.openAlertModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setLoading(false);
    }

    setLoading(isLoading) {
        this.setState(() => ({
            loading: isLoading
        }));
    }

    addColumnHandler(e) {
        e.preventDefault();
        this.props.addColumn('New col', DEFAULT_BOARD_ID);
    }

    openAlertModal(e) {
        e.preventDefault();
        this.props.showModal({
            open: true,
            title: 'Alert Modal',
            message: 'MESSAGE',
            closeModal: this.closeModal
        }, 'alert');
    }

    closeModal() {
        this.props.hideModal()
    }

    render() {
        return (
            <>
                <Row>
                    {/*<AddColumnButton onClick={this.addColumnHandler} />*/}
                    <button
                        className="btn btn-outline-primary btn-block"
                        onClick={this.openAlertModal}
                    >alert</button>
                    <ModalRoot hideModal={this.props.hideModal} />
                </Row>
                { this.state.loading && <Loader /> }
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Board);

Board.propTypes = {
    addColumn: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
};
