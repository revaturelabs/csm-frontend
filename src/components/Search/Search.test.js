import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Search debug />);
    expect(component).toMatchSnapshot();
  });
});
