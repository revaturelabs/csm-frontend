// Component.test.js
import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render, fireEvent } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../../reducers';
import initialState from '../../testImports/swotStoreTest.js';
import swotReducer from '../../testImports/swotStoreTest.js';
import SwotCategory from './SwotCategory';

jest.mock('react-redux');

describe("Swot Category unit tests", () => {
    it('Rendering component without props.', () => {
        const component = shallow(<SwotCategory/>);
        expect(component).toMatchSnapshot();
    });
    
    it('Rendering component with props for category and note.', () => {
        const category="TEST VALUE";
        const note='Test note for testing';
        const component = shallow(<SwotCategory category={category} note={note} />);
        expect(component).toMatchSnapshot();
    });

    it('Handles calling the proper handler following a delete button press', () => {
        const category="TEST VALUE";
        const note='Test note for testing';
        const editHandler=jest.fn();
        const deleteHandler = jest.fn();
        const component = mount(<SwotCategory category={category} note={note} editHandler={editHandler} deleteHandler={deleteHandler}></SwotCategory>)

    })


})