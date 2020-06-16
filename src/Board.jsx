import React from 'react';
import Column from "./Column";
import { Row } from 'reactstrap';
import AddColumnButton from "./AddColumn";

function getColumn(id, title) {
    return <Column key={id} title={title} />;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnsData: props.data.board.columns
        };
        this.addColumn = this.addColumn.bind(this);
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

    getColumns() {
        return this.state.columnsData.map(item => getColumn(item.id, item.title));
    }

    render() {
        return (
            <>
                <Row>
                    <AddColumnButton onClick={this.addColumn} />
                </Row>
                <Row>
                    { this.getColumns() }
                </Row>
            </>
        );
    }
}

export default Board;
