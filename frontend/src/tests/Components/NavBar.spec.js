import React from "react";
import { mount } from "enzyme";
import "jest-enzyme";
import { Container, Nav } from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "../../Components/NavBar";
import store from "../../store/Store";
import AddColumnModal from "../../Components/Modals/AddColumnModal";

describe("NavBar", () => {
    const navbar = mount(
        <Provider store={store}>
            <Router>
                <NavBar />
            </Router>
        </Provider>,
    );

    it("renders correctly", () => {
        expect(navbar.find(AddColumnModal).length).toEqual(1);
        expect(navbar.find(Container).length).toEqual(1);
        expect(navbar.find(Nav).length).toEqual(2);
    });
});
