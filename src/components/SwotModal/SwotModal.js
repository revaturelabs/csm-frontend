import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

const SwotModal = (props) => {
  const swotState = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();

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
        <Modal.Header>
          SWOT Analysis for: 
        </Modal.Header>
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
