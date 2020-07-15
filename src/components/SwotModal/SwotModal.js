import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

const SwotModal = (props) => {
  const fakeObj = {
    name: "Associate kid",
  };

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
        <Modal.Header>SWOT Analysis for: {fakeObj.name}</Modal.Header>
        <Modal.Content>
            {/* categories list on left */}
            {/* SWOT quadrants*/}
            {/* general notes for associate container */}
            {/* button to trigger spider graph */}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SwotModal;
