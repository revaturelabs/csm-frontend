import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
//import { Table } from 'semantic-ui-react';
//import './Chart.css'

const QC = (props) => {
  const evalState = useSelector(state => state.evalReducer);
  const dispatch = useDispatch();
  const qcSkills = []
  const qcData = []

  useEffect( () => {
    for (const qcEval of props.qc) {
      // console.log(qcEval)
      qcSkills.push(qcEval.skill)
      var qcScore
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
        //case 'top performer'
        //  qcScore = 3;
        //  break;
        case 'superstar':
            qcScore = 4;
            break;
        default: // the data is null if invalid
            qcScore = null;  // should leave a gap in line
            break;
      }
      // console.log(qcScore)
      qcData.push(qcScore)
    }

    dispatch({type :'setQCLabels', qcLabels : qcSkills})
    dispatch({type :'setQCValues', qcValues : qcData})
  }, []);

  const data = {

    labels: evalState.qcLabels,//qcSkills, //['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
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
        data: evalState.qcValues//[3, 4, 4, 1, 4, 2, 2, 3, 2, 4]
      }
    ]
  };



  //export default React.createClass({
  //displayName: 'LineExample',

  //render() {
  return (
    <div id='chart'>
      {/* <div> */}
      <h2 id='title'>Line Example</h2>
        <Line data={data} />
      {/* </div> */}
      {/* <div>
        <h2>Notes</h2>
        {skills.map(a => (
          <AccordionExampleStyled
            title={a.skill}
            note={a.note}
            score={a.score} />
        ))}
      </div> */}
    </div>

  );

}

export default QC;
