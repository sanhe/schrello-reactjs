import React from 'react';
import { Row } from 'reactstrap';
import AddColumnButton from "./AddColumn";
import Loader from "./Loader";
import Columns from "./Columns";
import {connect} from "react-redux";
import {addColumn} from "../actions/Actions";

const mapDispatchToProps = dispatch => ({
    addColumn: title => dispatch(addColumn(title))
});

class ConnectedBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.addColumnHandler = this.addColumnHandler.bind(this);
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
        this.props.addColumn('New col');
    }

    render() {
        return (
            <>
                <Row>
                    <AddColumnButton onClick={this.addColumnHandler} />
                </Row>
                { this.state.loading && <Loader /> }
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

const Board = connect(
    null,
    mapDispatchToProps
)(ConnectedBoard);

export default Board;
