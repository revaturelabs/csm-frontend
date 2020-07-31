import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Accordion, Icon, Placeholder } from 'semantic-ui-react';

const QC = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    /* handles accordion functionality */
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  const data = {
    labels: props.qcSkills,
    datasets: [
      {
        label: 'QC Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,0,255,0.5)',
        borderColor: 'rgba(0,0,255,0.5)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,0,255,0.5)',
        pointBackgroundColor: 'rgba(0,0,255,0.5)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,255,0.5)',
        pointHoverBorderColor: 'rgba(0,0,255,0.5)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.qcData
      }
    ]
  };
  const options = {
    spanGaps: false, 
    scales: {
      yAxes: [{
        // display: props.showYLabels,
        type: 'category',
        labels: ['Superstar', 'Good', 'Average', 'Poor'],
        ticks: {
          min: 6,
          max: 6,
          stepSize: .5
        }
      }]
    },
  };

  /* 
  The loaded checks if the call to the backend made in Evaluations.js 
  has returned data. 
  */
  const loaded = props.qcNotes && props.qcNotes.length > 0;

  return (
    <div className="chart container">
      <h4 className="chart heading4">
        <span className="loud name">{props.name}</span>
        <span className="info"> — QC Performance</span>
      </h4>
      {loaded ? (
        <Line data={data} options={options} className="chart associate-chart" />
      ) : (
        <Placeholder className="chart">
          <Placeholder.Image className="associate-chart" />
        </Placeholder>
      )}
      {props.showNotes ? (
        <div>
          <h4>Notes</h4>
          {props.qcNotes.map((qcNote, ind) => {
            return (
              <Accordion key={`qc${ind}`}>
                <Accordion.Title
                  active={activeIndex === ind}
                  index={ind}
                  onClick={handleClick}
                  className="title"
                >
                  <Icon name="dropdown" />
                  <span>{qcNote.skill}</span>
                  <span>{qcNote.score}</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === ind}>
                  <p>{qcNote.content}</p>
                </Accordion.Content>
              </Accordion>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default QC;
