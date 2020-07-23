import React from "react";
import { mount } from "enzyme";
import "jest-enzyme";
import { Button } from "reactstrap";
import { Provider } from "react-redux";
import store from "../../../store/Store";
import AddColumnModal from "../../../Components/Modals/AddColumnModal";
import MainModal from "../../../Components/Modals/MainModal";

describe("AddColumnModal", () => {
    const addColumnModal = mount(
        <Provider store={store}>
            <AddColumnModal />
        </Provider>,
    );

    it("renders correctly", () => {
        expect(addColumnModal.find(MainModal).length).toEqual(1);
        expect(addColumnModal.find(Button).length).toEqual(1);
    });
});
