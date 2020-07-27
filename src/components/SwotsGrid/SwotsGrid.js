import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Segment, Grid, Button, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const SwotsGrid = (props) => {
  const associate = useSelector((state) => state.swotReducer.currentAssociate);
  const displaySwots = useSelector((state) => state.swotReducer.displaySwots);
<<<<<<< HEAD
=======
  const startDate = useSelector((state) => state.swotReducer.startDate);
  const endDate = useSelector((state) => state.swotReducer.endDate);
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
  const dispatch = useDispatch();
  const history = useHistory();

  const setCurrentSwot = (e, swot) => {
    if (e.target.id === "trainer") {
      dispatch({ type: "updateEditable", editable: false });
    } else {
      dispatch({ type: "updateEditable", editable: true });
    }
    dispatch({ type: "updateSWOT", SWOT: swot });
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
<<<<<<< HEAD
        {displaySwots && displaySwots.length !== 0 ? (
=======
        {displaySwots.length > 0 ? (
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
          displaySwots
            .map((swot, i) => (
              <Grid.Column>
                <Segment>
                  <Grid>
                    {i === 0 ? (
                      swot.author !== "trainer" ? (
                        <Button
                          onClick={(e) => setCurrentSwot(e, swot)}
                          id="trainer"
                        >
                          Trainer Swot
                        </Button>
                      ) : null
                    ) : (
                      <Button onClick={(e) => setCurrentSwot(e, swot)}>
<<<<<<< HEAD
                        {swot.author}: &nbsp;{new Date(swot.date_created).toLocaleDateString()}
=======
                        {swot.author}: &nbsp;
                        {new Date(swot.date_created).toLocaleDateString()}
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
                      </Button>
                    )}
                    {i === 0 && swot.author === "trainer" ? (
                      <Card fluid>
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
