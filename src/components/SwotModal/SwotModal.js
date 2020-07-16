import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import SwotTable from '../SwotTable/SwotTable'
import './SwotModal.css';


const SwotModal = (props) => {
  const swotState = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();
  const list_drag = event => {
    event.dataTransfer.setData('text', event.target.id);
  }
  return (
    <>
      <Modal
        id='swot-modal'
        size='fullscreen'
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
            <ul>
              <li id='dragElt' draggable onDragStart={list_drag}>
                Drag ME
              </li>
            </ul>
            <SwotTable></SwotTable>
            {/* general notes for associate container */}
            {/* button to trigger spider graph */}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SwotModal;
