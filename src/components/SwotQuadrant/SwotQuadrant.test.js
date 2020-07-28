// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import mockStore from "../TestHooks/mockStore.js";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import SwotQuadrant from './SwotQuadrant';

import * as ReactReduxHooks from "../TestHooks/react-redux-hooks";

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("Search unit test", () => {
    let wrapper;
    let useEffect;
    let useState;
    let store;
    let dispatch;

    const mockUseState = () => {
        useState.mockImplementationOnce();
    };

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    const mockUseDispatch = () => {
        useDispatch.mockImplementationOnce();
    };

    beforeEach(() => {
        /* mocking store */
		store = configureStore([thunk])({
			mockStore
		});

	    /* mocking useEffect */
		useEffect = jest.spyOn(React, "useEffect");
		mockUseEffect(); // 2 times
		mockUseEffect(); //

		/* mocking useState */
		useState = jest.spyOn(React, "useState");
        mockUseState();

    	/* mocking useSelector on our mock store */
		jest
	   		.spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => store.getState());

		/* mocking useDispatch on our mock store  */
		jest
	 		.spyOn(ReactReduxHooks, "useDispatch")
	 		.mockImplementation(() => store.dispatch);

		/* mocking useLocation */
		jest
			.spyOn(ReactReduxHooks, "useLocation")
            .mockImplementation((path) => useLocation({
                pathname: path
            }));

        /* mocking useHistory */
        jest
            .spyOn(ReactReduxHooks, "useHistory")
            .mockImplementation(() => useHistory());

        /* shallow rendering */
        wrapper = shallow(<Categories store={store} />);
    });

    describe("on mount", () => {

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

    });

});
