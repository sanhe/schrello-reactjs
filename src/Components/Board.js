import React from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Columns from "./Containers/Columns";
import { addColumn } from "../actions/Actions";
import { hideModal, showModal } from "../actions/ModalActions";
// import ModalRoot from "../../temp/Modal/ModalRoot";
import { DEFAULT_BOARD_ID } from "../store/initialStates";

const mapDispatchToProps = (dispatch) => ({
    addColumn: (title, boardId) => dispatch(addColumn(title, boardId)),
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }));
    },
});

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
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
            loading: isLoading,
        }));
    }

    addColumnHandler(e) {
        e.preventDefault();
        // eslint-disable-next-line react/destructuring-assignment
        this.props.addColumn("New col", DEFAULT_BOARD_ID);
    }

    openAlertModal(e) {
        e.preventDefault();
        // eslint-disable-next-line react/destructuring-assignment
        this.props.showModal(
            {
                open: true,
                title: "Alert Modal",
                message: "MESSAGE",
                closeModal: this.closeModal,
            },
            "alert",
        );
    }

    closeModal() {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.hideModal();
    }

    render() {
        return (
            <>
                <Row>
                    {/* eslint-disable-next-line react/button-has-type */}
                    <button className="btn btn-outline-primary btn-block" onClick={this.openAlertModal}>
                        alert
                    </button>
                    {/* <ModalRoot hideModal={this.props.hideModal} /> */}
                </Row>
                {/* eslint-disable-next-line react/destructuring-assignment */}
                {this.state.loading && <Loader />}
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(Board);

Board.propTypes = {
    addColumn: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
};
