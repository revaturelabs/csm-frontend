import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import AccordionExampleStyled from './qcnotes';
//import { Table } from 'semantic-ui-react';
//import './Chart.css'

const Evaluations = (props) => {
  const evalState = useSelector(state => state.evalReducer);
  const dispatch = useDispatch();

  return (
    /* placeholder for the evaluation */
    <Grid container stackable columns={2} className='associate-eval'>
      <Grid.Column className='wrapper'>
        <SpiderChart 
          className='associate-chart' spiderChart={} />
      </Grid.Column>
      <Grid.Column className='wrapper'>
        <QC className='associate-chart' qc={} />
      </Grid.Column>
    </Grid>
  );

}
