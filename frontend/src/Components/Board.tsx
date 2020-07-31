import React from "react";
import { Row } from "reactstrap";
import axios from "axios";
import Loader from "./Loader";
import Columns from "./Containers/Columns";

interface IUser {
    id: number;
    name: string;
    email: string;
}

interface IUsers {
    users: Array<IUser>;
}

type BoardProps = {};
type BoardState = {
    loading: boolean;
    list: IUsers;
};

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            loading: true,
            list: { users: [] },
        };
    }

    async loadUsers() {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/all`);
        this.setState({
            list: res.data,
        });
    }

    componentDidMount() {
        this.loadUsers();
        this.setLoading(false);
    }

    setLoading(isLoading: boolean) {
        this.setState(() => ({
            loading: isLoading,
        }));
    }

    getUsersComponent = (users: Array<IUser>): JSX.Element => {
        if (users && users.length) {
            return (
                <div>
                    {users.map(
                        (item: IUser): JSX.Element => {
                            return <div key={item.id}>{item.name}</div>;
                        },
                    )}
                </div>
            );
        }

        return (
            <div>
                <h2>No List Items Found</h2>
            </div>
        );
    };

    render() {
        const { loading, list } = this.state;
        const users = list && list.users;

        return (
            <>
                {loading && <Loader />}
                <div>
                    { this.getUsersComponent(users) }
                </div>
                <Row>
                    <Columns />
                </Row>
            </>
        );
    }
}

export default Board;
