// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { useSelector, useDispatch, useShallowEqualSelector } from "react-redux";
import configureStore from "redux-mock-store";
import swotReducer from "../../reducers/swotReducer";
import renderer from "react-test-renderer";
import SwotNotes from "./SwotNotes";

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock("react-redux");

describe("SwotNotes unit test", () => {
  it("should render component without props", () => {
    const tree = renderer.create(<SwotNotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render component with props", () => {
    const placeholder='Notes...';
    const updateNotes = jest.fn();
    const component = shallow(<SwotNotes onChange={updateNotes} placeholder={placeholder} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the initial state', () => {
    expect(swotReducer).toEqual(swotReducer)
  });
});
