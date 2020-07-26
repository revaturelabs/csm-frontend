import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Placeholder } from 'semantic-ui-react';
import AssociateService from '../../services/associate.service';
import SpiderChart from '../SpiderCharts/SpiderChart';
import QC from '../QC/qc';
import './Evaluations.scss';

const Evaluations = (props) => {
  const associateService = new AssociateService();
  const dispatch = useDispatch();
  const [evalState, setEvals] = useState(0)
  const [qcState, setQCState] = useState({})
  const [batchSpiderState, setBatchSpiderState] = useState([])
  const [assocSpiderState, setAssocSpiderState] = useState([])
  
  useEffect(() => {

    async function getEvals() {
      console.log(props.associate.userID)
      // const associateAssesment = []
      const resp = await associateService.getEvaluations(props.associate.userID);
      console.log(resp.data)
      //setQCState(resp.data.qc)
      setBatchSpiderState(resp.data.batch_spider)
      setAssocSpiderState(resp.data.associate_spider)
      console.log("States set")
      //setEvals(resp.data)
    }
    getEvals();

  }, []);

  return (
    <Grid container stackable columns={2} className='associate-eval'>
      <Grid.Column className='wrapper'>
        {console.log("creating chart")}
        {console.log(batchSpiderState)}
        {console.log(assocSpiderState)}
        <SpiderChart className='associate-chart'
          userID={props.associate.userID}
          batchSpider={batchSpiderState}
          assocSpider={assocSpiderState}
        />
      </Grid.Column>  
      <Grid.Column className='wrapper'>
        {/* <QC 
          className='associate-chart'
          userID={props.associate.userID}
        /> */}
      </Grid.Column>
    </Grid>
  );

}

export default Evaluations
