import React from "react";
import { mount } from "enzyme";
import "jest-enzyme";
import { Button, Input, Modal } from "reactstrap";
import { Provider } from "react-redux";
import store from "../../../store/Store";
import AddColumnModal from "../../../Components/Modals/AddColumnModal";
import MainModal from "../../../Components/Modals/MainModal";

describe("AddColumnModal", () => {
    it("renders correctly", () => {
        const addColumnModal = mount(
            <Provider store={store}>
                <AddColumnModal />
            </Provider>,
        );

        expect(addColumnModal.find(MainModal).length).toEqual(1);
        expect(addColumnModal.find(Button).length).toEqual(1);
        expect(addColumnModal.find(Modal).prop("isOpen")).toBe(false);

        addColumnModal.find(Button).simulate("click");
        expect(addColumnModal.find(Modal).prop("isOpen")).toBe(true);
        expect(addColumnModal.find(Input).length).toEqual(2);

        addColumnModal.unmount();
    });
});
