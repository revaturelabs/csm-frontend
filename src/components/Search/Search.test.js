// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch, useShallowEqualSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../../reducers';
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

  	it('Tests find function call.', () => {
        const { useSelector, useDispatch } = require("react-redux")
        const mockedDispatch = jest.fn();
        const findPattern = jest.fn();
        mockedDispatch.mockImplementation(useDispatch());
        findPattern.mockImplementation((event) => {
            let category = '';
            let elements = [];
            let pattern = event.target.value;
            pattern = pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
            for (category of categories) {
                    if(category.toLowerCase().search(pattern.toLowerCase()) > -1) {
                            elements.push(category);
                    }
            }
            dispatch({type: "updateDisplayCategories", getDisplayCategories: elements})
        });
        useSelector.mockImplementation((callback) => {
            return callback({
    	        swotReducer: {
                    categories: ["AWS", "Python", "JavaScript"],
                    displayCategories: []
    	        },
            });
		});
        useDispatch.mockReturnValue(mockedDispatch);
        const id="search";
        const icon="search";
        const placeholder='Search...';
        const event = {target: {class: "input", value: "A"}};
        const component = mount(<Search id={id} icon={icon} fluid="true" onChange={findPattern} placeholder={placeholder} />);
        component.find('input').simulate('change', event);
        // expect(findPattern.mock.instances.length).toBe(1);
        expect(mockedDispatch).toBeCalledWith({type: "updateDisplayCategories", getDisplayCategories: ['AWS', 'JavaScript']})
    });
    //
    // it('Tests categories service.'), () => {
    //
    // }
});
