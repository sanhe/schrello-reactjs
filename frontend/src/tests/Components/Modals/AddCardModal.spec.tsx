import React from "react";
import { mount, ReactWrapper } from "enzyme";
import "jest-enzyme";
import { Input, Modal } from "reactstrap";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import MainModal from "../../../Components/Modals/MainModal";
import AddCardModal from "../../../Components/Modals/AddCardModal";
import ModalTypes from "../../../types/ModalTypes";
import { setFormValueModal } from "../../../actions/Actions";

const mockStore = configureStore([]);

describe("AddCardModal", () => {
    let store: MockStoreEnhanced<unknown, {}>;
    let component: ReactWrapper<any, React.Component["state"], React.Component>;

    beforeEach(() => {
        store = mockStore({
            colors: [
                {
                    colorId: "1",
                    title: "Light Gray",
                    code: "#D3D3D3",
                    isDefault: true,
                },
                {
                    colorId: "2",
                    title: "Black",
                    code: "#000000",
                },
            ],
            modal: [
                {
                    modalId: ModalTypes.ADD_CARD_MODAL_ID,
                    isOpen: true,
                    card: {
                        columnId: "1",
                    },
                },
            ],
        });

        store.dispatch = jest.fn();

        component = mount(
            <Provider store={store}>
                <AddCardModal className="success" />
            </Provider>,
        );
    });

    it("renders correctly", () => {
        expect(component.find(MainModal).length).toEqual(1);
        expect(component.find(Modal).prop("isOpen")).toBe(true);
        expect(component.find(Input).length).toEqual(3);
    });

    it("actions", () => {
        component.find("input#cardTitle").simulate("change", { target: { value: "test input" } });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            setFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { columnId: "1", title: "test input" } }),
        );

        component.find("textarea#cardContent").simulate("change", { target: { value: "test content" } });
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenNthCalledWith(
            1,
            setFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, {
                card: { columnId: "1", title: "test input" },
            }),
        );
        expect(store.dispatch).toHaveBeenNthCalledWith(
            2,
            setFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, {
                card: { columnId: "1", content: "test content" },
            }),
        );
    });
});
