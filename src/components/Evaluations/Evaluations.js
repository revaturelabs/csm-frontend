import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Placeholder } from 'semantic-ui-react';
import AssociateService from '../../services/associate.service';
import SpiderChart from '../SpiderCharts/SpiderChart';
import QC from '../QC/qc';
import './Evaluations.scss';

const Evaluations = (props) => {
  const evalState = useSelector(state => state.evalReducer);
  const associateService = new AssociateService();
  const dispatch = useDispatch();

  // useEffect( () => {
  //   getEvals();
  // }, [])

  const getEvals = async () => {
    console.log('============LOOK HERE============')
    const resp = await associateService.getEvaluations(props.associate.userID);
    return resp.data
  }

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      {/* <Grid.Column className='wrapper'>
        <SpiderChart 
          className='associate-chart' />
      </Grid.Column> */}
      
      <Grid.Column className='wrapper'>
        <SpiderChart className='associate-chart'
          spiderBatch={getEvals.batchSpider}
        />
      </Grid.Column>
        
      { evalState.qcEvals.length > 0 ?
        <Grid.Column className='wrapper'>
          <QC className='associate-chart' />
        </Grid.Column>
      : 
        <Placeholder className='wrapper'>
          <Placeholder.Image className='associate-chart' />
        </Placeholder> 
      }
    </Grid>
  );

}

export default Evaluations
