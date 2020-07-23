import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import App from "../../Components/App";
import store from "../../store/Store";
import NavBar from "../../Components/NavBar";
import "jest-enzyme";
import { Route } from "react-router-dom";
import Board from "../../Components/Board";
import { Container } from "reactstrap";

describe("App", () => {
    it("renders correctly", () => {
        const app = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>,
            )
            .toJSON();
        expect(app).toMatchSnapshot();
    });

    it("renders correctly with shallow", () => {
        const app = shallow(<App />);
        const navbar = <NavBar />;

        expect(app.contains(navbar)).toEqual(true);
        expect(app).toContainReact(navbar);
    });

    it("renders the inner Container, Route, Board", () => {
        const app = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(app.find(Container).length).toEqual(2);
        expect(app.find(Route).length).toEqual(2);
        expect(app.find(Board).length).toEqual(1);
    });
});
