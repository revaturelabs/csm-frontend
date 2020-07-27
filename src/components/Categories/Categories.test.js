// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Categories from './Categories';

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("Search unit test", () => {
    let wrapper;
    let useEffect;
    let store;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        /* mocking store */
        store = configureStore([thunk])({
            swotReducer: {
                categories: ["AWS", "Python", "JavaScript"],
                displayCategories: ["AWS", "JavaScript"]
            },
        });

        /* mocking useEffect */
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect(); // 2 times
        mockUseEffect(); //

        /* mocking useDispatch on our mock store */
        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);

        /* shallow rendering */
        wrapper = shallow(<RecipeList store={store} />);
    });

    describe("on mount", () => {
        it("Dispatch search action to store.", () => {
            const actions = store.getActions();
            expect(actions).toEqual([{type: "SEARCH", query: "all" },
            { type: "SEARCH_SUCCESS", categories: ["AWS", "Python", "JavaScript"]}]);
        }
    });

  	it('Rendering component without props.', () => {
		const { useSelector } = require("react-redux");
		useSelector.mockImplementation((callback) => {
			return callback({
				swotReducer: {
					categories: [],
					displayCategories: ["AWS", "Python", "JavaScript"],
				},
			});
		});
		const component = shallow(<Categories/>);
		expect(component).toMatchSnapshot();
  	});

  	it('Rendering component with children.', () => {
		const { useSelector } = require("react-redux");
		useSelector.mockImplementation((callback) => {
			return callback({
				swotReducer: {
					categories: [],
					displayCategories: ["AWS", "Python", "JavaScript"],
				},
			});
		});
		const component = render(<Categories/>);
		expect(component).toMatchSnapshot();
  	});

  	it('Mounting, testing list item mapping, and dismounting the component.', () => {
        const { useSelector, useDispatch } = require("react-redux");
        spyOn(React, 'useEffect').mockImplementation(f => f());
		useSelector.mockImplementation((callback) => {
            dispatch({
                type: "updateDisplayCategories",
                getDisplayCategories: categories,
            })
        }, [dispatch]);
		const component = mount(<Categories/>);
		expect(component).toMatchSnapshot();
		component.unmount();
  	});


});
