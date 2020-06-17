import React from 'react';
import Column from "./Column";
import { Row } from 'reactstrap';
import AddColumnButton from "./AddColumn";
import Loader from "./Loader";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnsData: props.data.board.columns,
            loading: true
        };
        this.addColumn = this.addColumn.bind(this);
    }

    componentDidMount() {
        this.setLoading(false);
    }

    setLoading(isLoading) {
        this.setState(() => ({
            loading: isLoading
        }));
    }

    addColumn(e) {
        e.preventDefault();

        this.setState((prevState) => {
            const defaultColumnTitle = 'New column';
            const columns = prevState.columnsData.slice();
            columns.push({
                id: prevState.columnsData.length + 1,
                title: defaultColumnTitle
            });

            return {
                columnsData: columns
            };
        });
    }

    getColumn(id, title) {
        return <Column key={id} title={title} />;
    }

    getColumns() {
        return this.state.columnsData.map(item => this.getColumn(item.id, item.title));
    }

    render() {
        return (
            <>
                <Row>
                    <AddColumnButton onClick={this.addColumn} />
                </Row>
                { this.state.loading && <Loader /> }
                <Row>
                    { this.getColumns() }
                </Row>
            </>
        );
    }
}

export default Board;
