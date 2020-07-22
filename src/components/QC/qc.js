import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2'
import { Accordion } from 'semantic-ui-react';
import AccordionExampleStyled  from './qcnotes';
//import { Table } from 'semantic-ui-react';
//import './Chart.css'

const QC = (props) => {

const qcState = useSelector(state => state.qcReducer);
const dispatch = useDispatch();
const skills = [    {
    'skill': 'Java',
    'score': '10',
    'note': 'notes'
  },
  {
    'skill': 'Python',
    'score': '8',
    'note': 'notes'
  },
  {
    'skill': 'HTML',
    'score': '8',
    'note': 'notes'
  },
]

const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
    datasets: [
      {
        label: 'QC Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3, 4, 4, 1, 4, 2, 2, 3, 2, 4]
      }
    ]
  };




  //export default React.createClass({
    //displayName: 'LineExample',
  
    //render() {
      return (
        <div>
        <div style={{width: "60%", marginLeft: "25px"}}>
          <h2>Line Example</h2>
          <Line data={data} />
        </div>
        <div>
            <h2>Notes</h2>
            {skills.map(a => (
        <AccordionExampleStyled
        title={a.skill}
        note={a.note}
        score={a.score} />
        ))}
        </div>
        </div>

      );

}

export default QC;