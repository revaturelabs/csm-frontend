import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Accordion, Icon } from 'semantic-ui-react';

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
        lineTension: 0.2,
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
        data: props.qcData
      }
    ]
  };
  const options = {
    spanGaps: false, 
    scales: {
      yAxes: [{
        display: props.showYLabels,
        type: 'category',
        labels: ['Superstar', 'Good', 'Average', 'Poor', ''],
        ticks: {
          min: 0,
          max: 4,
          stepSize: 1
        }
      }]
    },
  };

  return (
    <div className='chart container'>
      <h2 className='chart title'>{props.name} — QC Performance</h2>
      <Line data={data} options={options}/>
      {props.showNotes ?
        <div>
          <h2>Notes</h2>
          {props.qcNotes.map((qcNote, ind) => {
            return (
              <Accordion key={`qc${ind}`}>
                <Accordion.Title 
                  active={activeIndex === ind}
                  index={ind}
                  onClick={handleClick}
                  className="title"
                >
                  <Icon name='dropdown' />
                  <span>{qcNote.skill}</span>
                  <span>{qcNote.score}</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === ind}>
                  <p>{qcNote.content}</p>
                </Accordion.Content>
              </Accordion>
            )
          })}
        </div>
        : null}
    </div>
  );

}

export default QC;
