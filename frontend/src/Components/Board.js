import React from "react";
import { Row } from "reactstrap";
import Loader from "./Loader";
import Columns from "./Containers/Columns";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.setLoading(false);
    }

    setLoading(isLoading) {
        this.setState(() => ({
            loading: isLoading,
        }));
    }

    render() {
        return (
            <>
                {/* eslint-disable-next-line react/destructuring-assignment */}
                {this.state.loading && <Loader />}
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default Board;
