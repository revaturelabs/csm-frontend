// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import mockStore from "../TestHooks/mockStore.js";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import SwotNoteModal from './SwotNoteModal';

import * as ReactReduxHooks from "../TestHooks/react-redux-hooks";

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("SwotNoteModal test suite initialization.", () => {
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
        wrapper = shallow(<SwotNoteModal store={store} />);
    });

    describe("SwotNoteModal test suite tests.", () => {

      	it('Rendering component without props.', () => {
    		const component = shallow(<SwotNoteModal/>);
    		expect(component).toMatchSnapshot();
      	});

      	it('Rendering component with children.', () => {
    		const component = render(<SwotNoteModal/>);
    		expect(component).toMatchSnapshot();
      	});

      	it('Mounting, testing list item mapping, and dismounting the component.', () => {
    		const component = mount(<SwotNoteModal/>);
    		expect(component).toMatchSnapshot();
    		component.unmount();
      	});

    });

});
