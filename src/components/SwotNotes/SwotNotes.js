import React from "react";
import { Form, TextArea, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";

const SwotNotes = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Header as='h3'
        style={{margin: '10px'}}>Notes</Header>
        <TextArea
          rows="10"
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
