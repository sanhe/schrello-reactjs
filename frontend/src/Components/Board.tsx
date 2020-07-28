import React from "react";
import { Row } from "reactstrap";
import Loader from "./Loader";
import Columns from "./Containers/Columns";

type BoardProps = {};
type BoardState = {
    loading: boolean;
};

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.setLoading(false);
    }

    setLoading(isLoading: boolean) {
        this.setState(() => ({
            loading: isLoading,
        }));
    }

    render() {
        const { loading } = this.state;

        return (
            <>
                {loading && <Loader />}
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default Board;
