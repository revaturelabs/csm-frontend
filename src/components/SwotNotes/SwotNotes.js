import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { useDispatch } from "react-redux";

const SwotNotes = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <label>Notes</label>
        <TextArea
          placeholder="Notes..."
          onChange={(e) =>
            dispatch({ type: "updateNotes", notes: e.target.value })
          }
        />
      </Form>
    </>
  );
};

export default SwotNotes;
