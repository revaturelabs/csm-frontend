import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

/**
 * SwotNotes is a functional component that stores a string that
 * represents general notes for an individual associate and is a 
 * sibling to the swotQuadrant component.
 * @param {*} props Properties from the SwotModal component
 * @returns a text area with notes on an associate
 */
const SwotNotes = (props) => {
  const noteState = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();

  return (
    <>
        <Form>
            <label>Notes</label>
            <TextArea placeholder='Notes...' onChange={(e) => dispatch({type: 'updateNotes', notes: e.target.value})}/>
        </Form>
    </>
  );
};

export default SwotNotes;