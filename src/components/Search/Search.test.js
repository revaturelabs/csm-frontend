// Component.test.js
import React from 'react';
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../../reducers';
import store from '../../testImports/swotStoreTest.js';
import Search from './Search';

jest.mock("react-redux", () => ({
	  ...jest.requireActual("react-redux"),
	  useSelector: () => jest.fn(),
		useDispatch: jest.fn()
}));

describe('Search unit test', () => {

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
				const spyFunc = jest.fn();
				Object.defineProperty(global.document, 'querySelector', { value: spyFunc });
				const id="search";
				const find = jest.fn();
				const icon="search";
				const placeholder='Search...';
				const event = {target: {name: "search", value: "AWS"}};
				const component = mount(<Search id={id} icon={icon} fluid="true" onChange={find} placeholder={placeholder} />);
				component.find('input').simulate('change', event);
		    expect(find).toHaveBeenCalled();
	  });


});
