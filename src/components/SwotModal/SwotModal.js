import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

const SwotModal = (props) => {

  return (
    <>
      <Modal
        size="small"
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>SWOT Analysis for: </Modal.Header>
        <Modal.Content>
            {/* categories list on left */}
            {/* SWOT quadrants*/}
            {/* general notes for associate container */}
            <Modal.Header>Notes</Modal.Header>
            <Modal.Content>
              <textarea id='generalNotes'></textarea>
              <button>Submit</button>
            </Modal.Content>
            {/* button to trigger spider graph */}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SwotModal;
