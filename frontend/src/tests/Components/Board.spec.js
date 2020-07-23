import React from "react";
import { shallow } from "enzyme";
import "jest-enzyme";
import Board from "../../Components/Board";
import Columns from "../../Components/Containers/Columns";

describe("Board Component", () => {
    const board = shallow(<Board />);

    it("renders correctly with shallow", () => {
        const columns = <Columns />;
        expect(board.contains(columns)).toEqual(true);
    });
});
