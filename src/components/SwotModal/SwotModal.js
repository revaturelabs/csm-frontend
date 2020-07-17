import React, { useEffect } from "react";
import { Button, Modal, Icon, Grid } from "semantic-ui-react";
import Categories from "../Categories/Categories.js";
import CategoryService from "../../services/categories.service.js";
import SwotService from "../../services/swot.service.js";
import { useDispatch, useSelector } from "react-redux";
import SwotNotes from "../SwotNotes/SwotNotes";
import SwotTable from "../SwotTable/SwotTable";
import "./SwotModal.css";

const SwotModal = (props) => {
  const swotService = new SwotService();
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  const SWOT = useSelector((state) => state.swotReducer.SWOT)
  const modalState = useSelector((state) => state.swotReducer.swotModal)
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

  const addSWOT = async () => {
    const resp = await swotService.sendSWOT(props.associate.ID, SWOT)
    if (resp.status === 200) {
      closeSWOTModal()
    } else {
      alert('Adding SWOT has failed in the database')
    }
    
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
          {/* button to trigger spider graph */}
          
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SwotModal;
