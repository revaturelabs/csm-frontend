import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js';
import { useDispatch } from "react-redux";

describe('Test Search.js', () => {
  it('Should render Search.js correctly in "debug" mode.', () => {
    const component = shallow(<Search debug />);
    expect(component).toMatchSnapshot();
  });
});
