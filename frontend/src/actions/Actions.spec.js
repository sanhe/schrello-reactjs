import { DEFAULT_BOARD_ID } from "../store/initialStates";
import { addColumn } from "./Actions";

describe("Actions", () => {
    it("should add column", () => {
        const receivedAction = addColumn("New test column", DEFAULT_BOARD_ID);
        expect(receivedAction).toMatchSnapshot();
    });
});

// Snapshot
exports[`should add column 1`] = `
Object {
    "type": "ADD_COLUMN",
    "column": {
        "columnId": Any<String>,
        "boardId": "boardId1",
        "title": "New test column",
        "timestamp": Any<Date>,
    },
}
`;
