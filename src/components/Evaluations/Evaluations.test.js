import React from "react";
import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockStore from "../TestHooks/mockStore.js";

import * as ReactReduxHooks from "./react-redux-hooks";

import Evaluations from "./Evaluations";

configure({ adapter: new Adapter() });

describe("Evaluations initialization", () => {
	let wrapper;
	let useEffect;
	let store;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(f => f());
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

    	/* mocking useSelector on our mock store */
		jest
	   		.spyOn(ReactReduxHooks, "useSelector")
	   		.mockImplementation(state => store.getState());

		/* mocking useDispatch on our mock store  */
		jest
	 		.spyOn(ReactReduxHooks, "useDispatch")
	 		.mockImplementation(() => store.dispatch);

		/* shallow rendering */
	 	wrapper = shallow(<Evaluations store={store} />);
	});

	describe("Evaluations test suite.", () => {

		it("Renders component without props."), () => {
			const component = shallow(<Evaluations/>);
			expect(component).toMatchSnapshot();
		}

		it('Renders component with props that match the original component.', () => {
			const props = store
			const component = render(<Evaluations />);
			expect(component).toMatchSnapshot();
		});

		it("Dispatches search action to store.", () => {
			const actions = store.getActions();
			expect(actions).toEqual([{ type: "SEARCH", query: "all" },
			{ type: "SEARCH_SUCCESS", mockStore }]);
		});

		it("Renders RecipeItem components if recipes.length > 0.",
			() => {expect(wrapper.find(RecipeItem)).toHaveLength(20);
		});

	});
});
