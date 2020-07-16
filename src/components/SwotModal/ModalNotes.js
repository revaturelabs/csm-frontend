import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

const ModalNotes = (props) => {
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

export default ModalNotes;