import React, { useEffect } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories.js";
import CategoryService from "../../services/categories.service.js";

const SwotModal = (props) => {
  var state = useSelector((state) => state);
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  var elements = [];
  useEffect( async () => {
    let key = 0;
    const values = await categoryService.getCategories();
    for (key in values.data) {
        elements.push(values.data[key]['skillCategory']);
    }
    elements.sort();
    dispatch({type: "updateCategories", getCategories: elements})
  }, []);  const list_drag = event => {
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
