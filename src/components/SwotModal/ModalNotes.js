import React from "react";
import { Modal } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

const ModalNotes = (props) => {
  const noteState = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();

  return (
    <>
        <Modal.Header>Notes</Modal.Header>
        <textarea onChange={(e) => dispatch({type: 'updateNotes', notes: e.target.value})}></textarea>
    </>
  );
};

export default ModalNotes;