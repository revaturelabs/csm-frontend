// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../../reducers';
import initialState from '../../testImports/swotStoreTest.js';
import swotReducer from '../../testImports/swotStoreTest.js';
import Categories from './Categories';

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("Search unit test", () => {

  	it('Rendering component without props.', () => {
		const component = shallow(<Categories/>);
		expect(component).toMatchSnapshot();
  	});

  	it('Rendering component with children.', () => {
		const component = render(<Categories/>);
		expect(component).toMatchSnapshot();
  	});

  	it('Mounting, testing list item mapping, and dismounting the component.', () => {
		const component = mount(<Categories/>);

		expect(component).toMatchSnapshot();
		component.unmount();
  	});

  	it('Testing find function call.', () => {
		const dispatch = jest.fn();
		const { useSelector, useDispatch } = require("react-redux");
		useSelector.mockImplementation((callback) => {
			return callback({
				swotReducer: {
					categories: ["AWS", "Python", "JavaScript"],
					displayCategories: [],
				},
			});
		});
		useDispatch.mockReturnValue(dispatch);
		const event = {target: {name: "search", value: "A"}};
		const component = mount(<Categories/>);
		component.find('input').simulate('change', event);
		expect(dispatch).toBeCalledWith({type: "updateDisplayCategories", getDisplayCategories: ['AWS', 'JavaScript']})
  	});
});
