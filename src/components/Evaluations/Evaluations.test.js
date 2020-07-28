import React from "react";
import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockStore from "../TestHooks/mockStore.js";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Evaluations from "./Evaluations";

import * as ReactReduxHooks from "../TestHooks/react-redux-hooks";

configure({ adapter: new Adapter() });

describe("Evaluations initialization", () => {
	let wrapper;
	let useEffect;
	let useState;
	let store;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(f => f());
	};

	const mockLocation = {
		pathname: '/welcome',
		hash: '',
		search: '',
		state: ''
	}

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

		/* mocking useDispatch on our mock store  */
		jest
	 		.spyOn(ReactReduxHooks, "useDispatch")
	 		.mockImplementation(() => store.dispatch);

		/* mocking useLocation on our mock store */
		jest
			.spyOn(ReactReduxHooks, "useLocation")
			.mockReturnValue(mockLocation);

		/* shallow rendering */
	 	wrapper = shallow(<Evaluations store={store} />);
	});

	describe("Evaluations test suite.", () => {

		it('Rendering component without props.', () => {
    		const component = shallow(<Evaluations/>);
    		expect(component).toMatchSnapshot();
      	});

      	it('Rendering component with children.', () => {
    		const component = render(<Evaluations/>);
    		expect(component).toMatchSnapshot();
      	});

      	it('Mounting, testing list item mapping, and dismounting the component.', () => {
    		const component = mount(<Evaluations/>);
    		expect(component).toMatchSnapshot();
    		component.unmount();
      	});

	});
});
