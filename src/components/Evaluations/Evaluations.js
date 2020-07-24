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

  useEffect( () => {
    const getEvals = async () => {
      console.log('===========Getting Evals=============')
      let resp = await associateService.getEvaluations(props.associate.userID);
      console.log(resp.data)
      console.log(resp.data.qc)
      // console.log(resp.data.spider_associate)
      dispatch({ 
        type: 'handleBatchSpiderData', 
        spiderBatch: resp.data.batch_spider
      });
      dispatch({ 
        type: 'handleAssociateSpiderData', 
        spiderAssociate: resp.data.associate_spider
      });
      dispatch({
        type: 'handleQC',
        qcEvals: resp.data.qc
      });
    }
    getEvals();
  }, [])

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      {/* <Grid.Column className='wrapper'>
        <SpiderChart 
          className='associate-chart' />
      </Grid.Column> */}
      {evalState.spiderBatch.length > 0 ?
        <Grid.Column className='wrapper'>
          <SpiderChart className='associate-chart' />
        </Grid.Column>
        :
        <Placeholder className='wrapper'>
          <Placeholder.Image className='associate-chart' />
        </Placeholder>
      }
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
