import React from "react";
import { Row } from "reactstrap";
import axios from "axios";
import Loader from "./Loader";
import Columns from "./Containers/Columns";

interface IColumn {
    columnId: number;
    boardId: string;
    title: string;
    backgroundColorId: string;
    timestamp: string;
}

interface IColumns {
    columns: Array<IColumn>;
}

type BoardProps = {};
type BoardState = {
    loading: boolean;
    list: IColumns;
};

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            loading: true,
            list: { columns: [] },
        };
    }

    async loadColumns() {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/columns/all`);
        this.setState({
            list: res.data,
        });
    }

    componentDidMount() {
        this.loadColumns();
        this.setLoading(false);
    }

    setLoading(isLoading: boolean) {
        this.setState(() => ({
            loading: isLoading,
        }));
    }

    getColumnsComponent = (users: Array<IColumn>): JSX.Element => {
        if (users && users.length) {
            return (
                <div>
                    {users.map(
                        (item: IColumn): JSX.Element => {
                            return <div key={item.columnId}>{item.title}</div>;
                        },
                    )}
                </div>
            );
        }

        return (
            <div>
                <h2>No Columns Found</h2>
            </div>
        );
    };

    render() {
        const { loading, list } = this.state;
        const cols = list && list.columns;

        return (
            <>
                {loading && <Loader />}
                <div>
                    { this.getColumnsComponent(cols) }
                </div>
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default Board;
