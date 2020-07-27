import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import AssociateService from '../../services/associate.service'
//import { Table } from 'semantic-ui-react';
//import './Chart.css'

const QC = (props) => {
  const scores = []
  const labels = []

      for (const qcEval of props.qc) {
        console.log(qcEval)
        labels.push(qcEval.skill)
        let qcScore = 0
        switch (qcEval.score.toLowerCase()) {
          case 'poor':
            qcScore = 1;
            break;
          case 'average':
            qcScore = 2;
            break;
          case 'good':
            qcScore = 3;
            break;
          case 'superstar':
            qcScore = 4;
            break;
          default: // the data is null if invalid
            qcScore = null;  // should leave a gap in line
            break;
        }
        // console.log(qcScore)
        scores.push(qcScore)
      }

  const data = {

    labels: labels,//['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
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
        data: scores//[3, 4, 4, 1, 4, 2, 2, 3, 2, 4]
      }
    ]
  };

  return (
    <div id='chart'>
      <h2 className='title'>Line Example</h2>
      <Line data={data} />
    </div>
  );

}

export default QC;
