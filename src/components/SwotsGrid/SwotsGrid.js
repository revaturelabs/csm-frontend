import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Segment, Grid, Button, Card } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';

const SwotsGrid = (props) => {
  const currentSwots = useSelector((state) => state.swotReducer.currentSwots);
  const dispatch = useDispatch();

  const history = useHistory();
  //   useEffect(() => {
  // fetch associates
  // dispatch in to state (swotReducer.currentSwots or whatever name works)
  //   }, [])

  const setCurrentSwot = (e, swot) => {
      if (e.target.id === 'trainer') {
        dispatch({type: 'updateEditable', editable: false})
      } else {
        dispatch({type: 'updateEditable', editable: true})
      }
      dispatch({type: 'updateSWOT', SWOT: swot})
      history.push('/editSWOT')
  }

  

  return (
    <Container>
      <Grid stackable columns={2}>
        {currentSwots.map((swot, i) => (
          <Grid.Column>
            <Segment>
              <Grid>
                  {
                    i === 0 ?
                    <Button onClick={(e) => setCurrentSwot(e, swot) } id='trainer'>Trainer Swot</Button>
                    :
                    <Button onClick={(e) => setCurrentSwot(e, swot) }>{swot.date}</Button>
                  }
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Strengths</Card.Header>
                        <Card.Description>{swot.Strengths[0].category}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Weaknesses</Card.Header>
                        <Card.Description>{swot.Weaknesses[0].category}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Opportunities</Card.Header>
                        <Card.Description>{swot.Opportunities[0].category}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Threats</Card.Header>
                        <Card.Description>{swot.Threats[0].category}</Card.Description>
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
