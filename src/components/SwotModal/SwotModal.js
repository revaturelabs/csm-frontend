import React, { useEffect } from "react";
import { Button, Modal, Icon, Grid } from "semantic-ui-react";
import Categories from "../Categories/Categories.js";
import CategoryService from "../../services/categories.service.js";
import { useDispatch, useSelector } from "react-redux";
import SwotNotes from "../SwotNotes/SwotNotes";
import SwotTable from "../SwotTable/SwotTable";
import "./SwotModal.css";

const SwotModal = (props) => {
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  const swotState = useSelector((state) => state.swotReducer);
  const modalState = useSelector((state) => state.swotModalReducer)
  useEffect(() => {
    async function getCategories() {
      let elements = [];
      let key = 0;
      const values = await categoryService.getCategories();
      for (key in values.data) {
        elements.push(values.data[key]["skillCategory"]);
      }
      elements.sort();
      dispatch({ type: "updateCategories", getCategories: elements });
    }
    getCategories();
  }, [ dispatch]);

  const showSWOTModal = () => {
    dispatch({type: 'toggleSwotModal', toggle: true})
  }
  const closeSWOTModal = () => {
    dispatch({type: 'toggleSwotModal', toggle: false})
  }

  const addSWOT = () => {
    // Add code to actually PUT the SWOT
    closeSWOTModal()
  }

  return (
    <>
      <Modal
        id="swot-modal"
        size="fullscreen"
        open={modalState}
        onClose={
          closeSWOTModal
        }
        trigger={
          <Button primary icon
          onClick={showSWOTModal}
          >
            Proceed <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>SWOT Analysis for:</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Column width={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid.Row style={{ height: '65vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                <SwotTable />
              </Grid.Row>
              <Grid.Row>
                <SwotNotes />
              </Grid.Row>
              <Grid.Row>
              <Button
                color='instagram'
                onClick={addSWOT}
              >
                  Add SWOT Analysis to Associate
              </Button>
              <Button
                color='red'
                onClick={closeSWOTModal}
              >
                  Cancel
              </Button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          {/* <ul>
            <li id="dragElt" draggable onDragStart={list_drag}>
              Drag ME
            </li>
          </ul> */}

          {/* button to trigger spider graph */}
          
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SwotModal;
