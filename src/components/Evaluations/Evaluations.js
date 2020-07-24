import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Placeholder } from 'semantic-ui-react';
import AssociateService from '../../services/associate.service';
import SpiderChart from '../SpiderCharts/SpiderChart';
import QC from '../QC/qc';
import './Evaluations.scss';

const Evaluations = (props) => {
  //const evalState = useSelector(state => state.evalReducer);
  const associateService = new AssociateService();
  const dispatch = useDispatch();
  const [evalState, setEvals] = useState(0)

  // useEffect(() => {
  //   async function getEvals(){
  //     const resp = await associateService.getEvaluations(props.associate.userID); 
  //     setEvals(resp.data);
  //   }
  //   getEvals();

  //   // getEvals();
  // }, []);

  // async function getEvals() {
  //   console.log('============LOOK HERE============')
  //   console.log(props.associate.userID)
  //   const resp = await associateService.getEvaluations(props.associate.userID);
  //   console.log(resp.data)
  //   return resp.data
  // }
  // console.log("outside useefect")
  // console.log(evalState)
  // const resp = getEvals()

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      <Grid.Column className='wrapper'>
        {/* {console.log("rendering now")}
        {console.log(evalState.batch_spider)} */}
        {/* {console.log(getEvals)} */}
        {/* {evalState && evalState.length > 0 ? */}
          <SpiderChart className='associate-chart'
            userID={props.associate.userID}
          />
        {/* :
          <Placeholder className='wrapper'>
            <Placeholder.Image className='associate-chart' />
          </Placeholder>
        } */}
      </Grid.Column>
        
      {/* { evalState.qcEvals.length > 0 ? */}
        <Grid.Column className='wrapper'>
          <QC className='associate-chart'
          userID={props.associate.userID} />
        </Grid.Column>
      {/* : 
        <Placeholder className='wrapper'>
          <Placeholder.Image className='associate-chart' />
        </Placeholder> 
      } */}
    </Grid>
  );

}

export default Evaluations
