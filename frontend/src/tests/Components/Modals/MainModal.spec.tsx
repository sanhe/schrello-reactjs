import React, { ReactElement } from "react";
import { mount } from "enzyme";
import "jest-enzyme";
import { Form, FormGroup, Input, Label, Modal } from "reactstrap";
import { Provider } from "react-redux";
import store from "../../../store/Store";
import MainModal from "../../../Components/Modals/MainModal";
import ModalTypes from "../../../types/ModalTypes";

describe("MainModal", () => {
    it("renders correctly", () => {
        const form = (): ReactElement => (
            <Form>
                <FormGroup>
                    <Label for="columnTitle">Title</Label>
                    <Input type="text" id="columnTitle" />
                </FormGroup>
                <FormGroup>
                    <Label for="cardContent">Content</Label>
                    <Input type="textarea" id="cardContent" />
                </FormGroup>
            </Form>
        );
        const onToggleModal = jest.fn();
        const submitForm = jest.fn(() => {
            onToggleModal();
        });
        const mainModal = mount(
            <Provider store={store}>
                <MainModal
                    modalId={ModalTypes.ADD_COLUMN_MODAL_ID}
                    title="Add a column"
                    content={form}
                    className="close"
                    onToggleModal={onToggleModal}
                    onSubmitModal={submitForm}
                />
            </Provider>,
        );

        expect(mainModal.find(".add-column").length).toEqual(1);
        expect(mainModal.find(Modal).length).toEqual(1);
        expect(mainModal.find(Modal).prop("isOpen")).toBe(false);
        mainModal.unmount();
    });
});
