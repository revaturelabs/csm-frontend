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
import Search from './Search';

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("Search unit test", () => {

  	it('Rendering component without props.', () => {
        const component = shallow(<Search/>);
        expect(component).toMatchSnapshot();
  	});

  	it('Rendering component with props that match the original component.', () => {
        const id="search";
        const find = jest.fn();
        const icon="search";
        const placeholder='Search...';
        const component = shallow(<Search id={id} icon={icon} fluid="true" onChange={find} placeholder={placeholder} />);
        expect(component).toMatchSnapshot();
  	});

  	it('Mounting, testing user input, and dismounting the component.', () => {
        const id="search";
        const find = jest.fn();
        const icon="search";
        const placeholder='Search...';
        const component = mount(<Search id={id} icon={icon} fluid="true" onChange={find} placeholder={placeholder} />);
        component.find('#search').value;
        component.simulate('keypress', { keyCode: 'A' });
        component.simulate('keypress', { keyCode: 'W' });
        component.simulate('keypress', { keyCode: 'S' });
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
                    displayCategories: []
    	        },
            });
		});
        useDispatch.mockReturnValue(dispatch);
        const id="search";
        const find = jest.fn();
        const icon="search";
        const placeholder='Search...';
        const event = {target: {name: "search", value: "A"}};
        const component = mount(<Search id={id} icon={icon} fluid="true" onChange={find} placeholder={placeholder} />);
        component.find('input').simulate('change', event);
        expect(dispatch).toBeCalledWith({type: "updateDisplayCategories", getDisplayCategories: ['AWS', 'JavaScript']})
  	});
});
