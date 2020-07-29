import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Segment, Grid, Button, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./SwotsGrid.scss"

const SwotsGrid = (props) => {
  const associate = useSelector((state) => state.swotReducer.currentAssociate);
  const displaySwots = useSelector((state) => state.swotReducer.displaySwots);
  const startDate = useSelector((state) => state.swotReducer.startDate);
  const endDate = useSelector((state) => state.swotReducer.endDate);
  const dispatch = useDispatch();
  const history = useHistory();

  const setCurrentSwot = (e, swot) => {
    if (e.target.id === "trainer") {
      dispatch({ type: "updateEditable", editable: false });
    } else {
      dispatch({ type: "updateEditable", editable: true });
    }
    dispatch({ type: "updateSWOT", SWOT: {...swot, date_created: new Date()} });
    history.push("/editSWOT");
  };

  const roundDate = (date) => {
    date -= date % (24 * 60 * 60 * 1000);//subtract amount of time since midnight
    date += new Date().getTimezoneOffset() * 60 * 1000;//add on the timezone offset
    return new Date(date);
  }
  
  useEffect(() => {
    let swots = associate.swot;
    swots = swots.filter(
      (swot) => 
      roundDate(new Date(swot.date_created)) >= roundDate(new Date(startDate)) &&
      roundDate(new Date(swot.date_created)) <= roundDate(new Date(endDate))
    );
    dispatch({ type: "updateDisplaySwots", swots: swots });
  }, []);

  return (
    <Container>
      <Grid stackable columns={2}>
        {displaySwots.length > 0 ? (
          displaySwots
            .map((swot, i) => (
              <Grid.Column>
                <Segment className="swot-segment">
                  <Grid>
                    {i === 0 ? (
                      swot.author !== "trainer" ? (
                        <Button
                          onClick={(e) => setCurrentSwot(e, swot)}
                          id="trainer"
                          className="open-swot-btn"
                        >
                          Trainer Swot
                        </Button>
                      ) : null
                    ) : (
                      <Button
                        className="open-swot-btn"
                        onClick={(e) => setCurrentSwot(e, swot)}
                      >
                        {swot.author}: &nbsp;
                        {new Date(swot.date_created).toLocaleDateString()}
                      </Button>
                    )}
                    {i === 0 && swot.author === "trainer" ? (
                      <Card fluid className="swot-card">
                        <Card.Content>
                          <Card.Description>
                            Trainer SWOT Not Provided
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    ) : (
                      <>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Header>Strengths</Card.Header>
                                {swot.Strengths.length !== 0 ? (
                                  <Card.Description>
                                    {swot.Strengths[0].category}
                                  </Card.Description>
                                ) : null}
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Header>Weaknesses</Card.Header>
                                {swot.Weaknesses.length !== 0 ? (
                                  <Card.Description>
                                    {swot.Weaknesses[0].category}
                                  </Card.Description>
                                ) : null}
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Header>Opportunities</Card.Header>
                                {swot.Opportunities.length !== 0 ? (
                                  <Card.Description>
                                    {swot.Opportunities[0].category}
                                  </Card.Description>
                                ) : null}
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Header>Threats</Card.Header>
                                {swot.Threats.length !== 0 ? (
                                  <Card.Description>
                                    {swot.Threats[0].category}
                                  </Card.Description>
                                ) : null}
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                      </>
                    )}
                  </Grid>
                </Segment>
              </Grid.Column>
            ))
            .reverse()
        ) : (
          <Grid.Column>
            <Grid.Row>
              <Card>
                <Card.Content>
                  <Card.Header>
                    There are no SWOTs for this Associate
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Row>
          </Grid.Column>
        )}
      </Grid>
    </Container>
  );
};

export default SwotsGrid;
