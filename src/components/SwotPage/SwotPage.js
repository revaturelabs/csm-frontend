import React, { useEffect } from "react";
import { Button, Grid, Container, Header } from "semantic-ui-react";
import Categories from "../Categories/Categories.js";
import CategoryService from "../../services/categories.service.js";
import { useHistory } from "react-router-dom";
import SwotService from "../../services/swot.service.js";
import { useDispatch, useSelector } from "react-redux";
import SwotNotes from "../SwotNotes/SwotNotes";
import SwotTable from "../SwotTable/SwotTable";
import SwotCharts from "../SwotCharts/SwotCharts";
import "./SwotPage.css";

const SwotPage = (props) => {
  const swotService = new SwotService();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  const SWOT = useSelector((state) => state.swotReducer.SWOT);
  const associate = useSelector((state) => state.swotReducer.associate);
  useEffect(() => {
    async function getCategories() {
      const resp = await categoryService.getCategories();
      console.log("HERE", resp.data);
      const lst = [
        ...resp.data,
        { categoryId: 41, skillCategory: "Other", active: "true" },
      ];
      lst.sort();
      dispatch({ type: "updateCategories", getCategories: lst });
    }
    getCategories();
  }, [dispatch]);

  /**
   * @todo Refactor functionality
   */
  const closeSWOT = () => {
    const data = {
      date: null,
      Strengths: [],
      Weaknesses: [],
      Opportunities: [],
      Threats: [],
      Notes: "",
    };
    dispatch({ type: "updateSWOT", SWOT: data });
    history.push("/viewSwots");
  };

  /**
   * @todo Refactor functionality
   */
  const addSWOT = async () => {
    const resp = await swotService.sendSWOT(associate.ID, SWOT);
    if (resp.status === 200) {
      closeSWOT();
    } else {
      alert("Adding SWOT has failed in the database");
    }
  };

  return (
    <Container id="swotContainer">
      <Header as="h1" id="associateNameHeader" fluid>
        Add SWOT Analysis for {associate.name}
      </Header>
      <Grid>
        <Grid.Column width={3}>
          <div id="sticky">
            <Categories />
          </div>
        </Grid.Column>

        <Grid.Column width={13}>
          <Grid.Row style={{ overflowY: "scroll", overflowX: "hidden" }}>
            <SwotTable />
          </Grid.Row>
          <Grid.Row centered>
            <SwotNotes />
          </Grid.Row>
          <Grid.Row>
            <SwotCharts />
          </Grid.Row>
          <Grid.Row>
            <Button color="instagram" onClick={addSWOT}>
              Add SWOT Analysis to Associate
            </Button>
            <Button color="red" onClick={closeSWOT}>
              Cancel
            </Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default SwotPage;
