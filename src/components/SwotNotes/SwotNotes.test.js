// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch, useShallowEqualSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../../reducers';
import SwotNotes from './SwotNotes';

// It can receive two more parameters, the second one is to specify a factory instead of the jest's automocking feature
jest.mock('react-redux');

describe("SwotNotes unit test", () => {

	it('Rendering component without props.', () => {
		const component = shallow(<SwotNotes/>);
		expect(component).toMatchSnapshot();
	});

	it('Rendering component with props that match the original component.', () => {
		// Set your own props here...
		const props = "props";
		const component = render(<SwotNotes props={props} />);
		expect(component).toMatchSnapshot();
	});

	it('Mounting, testing user input, and dismounting the component.', () => {
		// Set your own functions and props here...
		props = "props";
		find = jest.fn();
		const component = mount(<Search id="find" props={props} find={find} />);
		component.find('#find').value;
		component.simulate('keypress', { keyCode: 'A' });
		expect(component).toMatchSnapshot();
		component.unmount();
	});

});
