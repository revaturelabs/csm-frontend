import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js';
import { useDispatch } from "react-redux";

describe('Test Search.js', () => {
    it('Should render Search.js correctly without props.', () => {
      const component = shallow(<Search/>);

      expect(component).toMatchSnapshot();
    });
    it('Should render with props. Define props for your object below.', () => {
      const strings = ['one', 'two'];
      const component = shallow(<Search list={strings} />);
      expect(component).toMatchSnapshot();
    });
    it('Should be possible to activate button with Spacebar. Define user input below.', () => {
        const component = mount(<Search />);
        component
          .find('button#my-button-one')
          .simulate('keydown', { keyCode: 32 });
        expect(component).toMatchSnapshot();
        component.unmount();
    });
    it('Button click should hide component', () => {
        const component = shallow(<Search onClick={clickFn} />);
        component
          .find('button#my-button-two')
          .simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
    it('should set storage on save button click', () => {
        mockTryGetValue.mockReturnValueOnce(true);
        const component = mount(<MyComponent />);
        component.find('button#my-button-three').simulate('click');
        expect(mockTryGetValue).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
        component.unmount();
    }); 
});
