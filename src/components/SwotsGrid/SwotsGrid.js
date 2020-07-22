import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Segment, Grid, Button, Card } from "semantic-ui-react";

const SwotsGrid = (props) => {
  const currentSwots = useSelector((state) => state.swotReducer.currentSwots);
  const dispatch = useDispatch();

  //   useEffect(() => {
  // fetch associates
  // dispatch in to state (swotReducer.currentSwots or whatever name works)
  //   }, [])

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Button>+ SWOT</Button>
          </Segment>
        </Grid.Column>
        {currentSwots.map((swot, i) => (
          <Grid.Column>
            <Segment>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Strengths</Card.Header>
                        <Card.Description>Python</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Weaknesses</Card.Header>
                        <Card.Description>Python</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Opportunities</Card.Header>
                        <Card.Description>Python</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Threats</Card.Header>
                        <Card.Description>Python</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default SwotsGrid;
