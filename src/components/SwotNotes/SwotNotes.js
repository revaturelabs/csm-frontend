import React from "react";
import { Form, TextArea, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";

const SwotNotes = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Header as='h3'
        style={{padding: '10px'}}>Notes</Header>
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
