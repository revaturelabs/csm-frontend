import React, { useEffect, useState } from 'react';
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
  const [evalData, setEvalData] = useState({});

  useEffect( () => {
    const getEvals = async () => {
      const resp = await associateService.getEvaluations(props.associate.userID);
      setEvalData('hello')
      console.log(resp.data)
      console.log(evalData)
    }
    getEvals();
  }, [])

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      {console.log(evalData)}
      <Grid.Column className='wrapper'>
        {evalData && evalData > 0 ?
          <>
            {console.log(evalData)}
            <SpiderChart className='associate-chart'
              batchSpider={evalData.batch_spider}
              associateSpider={evalData.associate_spider}
            />
          </>
        :
          <Placeholder className='wrapper'>
            <Placeholder.Image className='associate-chart' />
          </Placeholder>
        }
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
