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
  //   var getEvals = async () => {
  //     var resp = await associateService.getEvaluations(props.associate.userID); 
  //   }
  //   getEvals();
  // }, [])

  const getEvals = async () => {
    console.log('============LOOK HERE============')
    console.log(props.associate.userID)
    const resp = await associateService.getEvaluations(props.associate.userID);
    console.log(resp.data)
    return resp.data
  }

  const resp = 'some gibberish';

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      <Grid.Column className='wrapper'>
        {console.log(resp)}
        {/* {resp && resp.length > 0 ?
          <SpiderChart className='associate-chart'
            spiderBatch={resp.batchSpider}
          />
        :
          <Placeholder className='wrapper'>
            <Placeholder.Image className='associate-chart' />
          </Placeholder>
        } */}
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
