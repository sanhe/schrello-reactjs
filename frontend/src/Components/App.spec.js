import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import App from "./App";
import store from "../store/Store";
import NavBar from "./NavBar";
import "jest-enzyme";

it("App renders correctly", () => {
    const app = renderer
        .create(
            <Provider store={store}>
                <App />
            </Provider>,
        )
        .toJSON();
    expect(app).toMatchSnapshot();
});

it("App renders without crashing with shallow", () => {
    const app = shallow(<App />);
    const navbar = <NavBar />;

    expect(app.contains(navbar)).toEqual(true);
    expect(app).toContainReact(navbar);
});
