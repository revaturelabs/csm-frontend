import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Segment, Grid, Button, Card } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';

const SwotsGrid = (props) => {
  const associate = useSelector((state) => state.swotReducer.currentAssociate);
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
        {
          associate.swot && associate.swot.length !== 0 ?
          associate.swot.map((swot, i) => (
          <Grid.Column>
            <Segment>
              <Grid>
                  {
                    i === 0 ?
                    (swot.author !== 'trainer') ?
                      <Button onClick={(e) => setCurrentSwot(e, swot) } id='trainer'>Trainer Swot</Button>
                      :
                      null
                    :
                    <Button onClick={(e) => setCurrentSwot(e, swot) }>{swot.date_created}</Button>
                  }
                  {
                    (i === 0 ) && (swot.author === 'trainer') ?
                    <Card fluid>
                      <Card.Content>
                        <Card.Description>Trainer SWOT Not Provided</Card.Description>
                      </Card.Content>
                    </Card> 
                    :
                <>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Strengths</Card.Header>
                        {
                          swot.Strengths.length !== 0 ?
                            <Card.Description>{swot.Strengths[0].category}</Card.Description>
                          :
                          null
                        }
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Weaknesses</Card.Header>
                        {
                          swot.Weaknesses.length !== 0 ?
                            <Card.Description>{swot.Weaknesses[0].category}</Card.Description>
                          :
                          null
                        }
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Opportunities</Card.Header>
                        {
                          swot.Opportunities.length !== 0 ?
                            <Card.Description>{swot.Opportunities[0].category}</Card.Description>
                          :
                          null
                        }
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Threats</Card.Header>
                        {
                          swot.Threats.length !== 0 ?
                            <Card.Description>{swot.Threats[0].category}</Card.Description>
                          :
                          null
                        }
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                </>
                  }
                
              </Grid>
            </Segment>
          </Grid.Column>
        )).reverse()
        :
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
        </Grid.Column>}
      </Grid>
    </Container>
  );
};

export default SwotsGrid;
