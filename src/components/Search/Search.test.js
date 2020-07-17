import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js';
import { useDispatch } from "react-redux";
import init from "../../testStore/swotStoreTest.js";

describe('Test Search.js', () => {
    let initialState = init;
    it('Should render Search.js correctly without props.', () => {
        const component = shallow(<Search/>);
        expect(component).toMatchSnapshot();
    });
    it('Should render with props. Define props for your object below.', () => {
        const id = "search";
        const icon = "search";
        const placeholder = "Search...";
        const component = shallow(<Search id={id} icon={icon} placeholder={placeholder} />);
        expect(component).toMatchSnapshot();
    });
    it('Should be possible to activate button with Spacebar. Define user input below.', () => {
        const component = mount(<Search />);
        component
            .find('#search');
            .simulate('keydown', { keyCode: 65 });
            .simulate('keydown', { keyCode: 87 });
            .simulate('keydown', { keyCode: 83 });
        expect(component).toMatchSnapshot();
        component.unmount();
    });
    it('Search component click should find an object.', () => {
        const component = shallow(<Search onChange={find} />);
        component
            .find('#search');
            .simulate('keydown', { keyCode: 65 });
            .simulate('keydown', { keyCode: 87 });
            .simulate('keydown', { keyCode: 83 });
        expect(find).toHaveBeenCalled();
    });
    it('should set storage on save button click', () => {
        mockTryGetValue.mockReturnValueOnce(true);
        const component = mount(<Search />);
        component.find('#search').simulate('keydown', {keyCode: 65 });
        expect(mockTryGetValue).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
        component.unmount();
    });
});
