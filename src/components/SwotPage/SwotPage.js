import React, { useEffect } from "react";
import { Button, Grid, Container, Header, Segment } from "semantic-ui-react";
import Categories from "../Categories/Categories.js";
import CategoryService from "../../services/categories.service.js";
import { useHistory, Redirect } from "react-router-dom";
import SwotService from "../../services/swot.service.js";
import { useDispatch, useSelector } from "react-redux";
import SwotNotes from "../SwotNotes/SwotNotes";
import SwotTable from "../SwotTable/SwotTable";
import SwotCharts from "../SwotCharts/SwotCharts";
import "./SwotPage.scss";

const SwotPage = (props) => {
  const swotService = new SwotService();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  const SWOT = useSelector((state) => state.swotReducer.SWOT);
  const associate = useSelector((state) => state.swotReducer.currentAssociate);
  const edit = useSelector((state) => state.swotReducer.editable);
  const batchTopics = useSelector((state) => state.swotReducer.batchTopics);
  const manager = useSelector((state) => state.managerReducer.manager);
  useEffect(() => {
    async function getCategories() {
      const resp = await categoryService.getCategories();
      let lst = resp.data.map((cat) => cat.skillCategory);
      lst.sort();
      let temp = batchTopics.sort().concat(lst);
      let orderedCategories = [...new Set(temp), "Other"];
      dispatch({
        type: "updateCategories",
        getCategories: orderedCategories,
      });
    }
    getCategories();
    dispatch({ type: "updateAuthor", author: manager.username });
  }, []);

  /**
   * @todo Refactor functionality
   */
  const closeSWOT = () => {
    const data = {
      date_created: null,
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
    dispatch({ type: "updateAuthor", author: manager.username });
    const resp = await swotService.sendSWOT(associate.email, SWOT);
    if (resp.status === 201) {
      dispatch({
        type: "updateAssociate",
        associate: { ...associate, swot: [...associate.swot, resp.data] },
      });
      closeSWOT();
    } else {
      alert("Adding SWOT has failed in the database");
    }
  };

  return (
    <>
      {SWOT.date_created ? (
        <Container id="swotContainer">
          <Segment className="swot-header">
            <Header as="h1" id="associateNameHeader" fluid>
              SWOT Analysis for <span>{associate.name}</span>
            </Header>
          </Segment>
          <Grid>
            <Grid.Column width={3}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={13} id="swot-table-container">
              <Grid.Row>
                <SwotTable />
              </Grid.Row>
              <Grid.Row centered>
                <SwotNotes />
              </Grid.Row>
              <Grid.Row>
                {edit ? (
                  <SwotCharts
                    associate={{
                      name: associate.name,
                      userID: associate.email,
                    }}
                  />
                ) : (
                  <></>
                )}
              </Grid.Row>
              <Grid.Row>
                {edit ? (
                  <>
                    <Button className="add bottom" onClick={addSWOT}>
                      Add SWOT Analysis to Associate
                    </Button>
                    <Button color="red" onClick={closeSWOT}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button className="bottom" color="red" onClick={closeSWOT}>
                    Back
                  </Button>
                )}
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
       ) : (
        <Redirect to={{ pathname: "/promotedlastweek" }} />
      )}
    </>
  );
};

export default SwotPage;
