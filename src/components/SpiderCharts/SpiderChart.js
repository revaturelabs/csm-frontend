import React from 'react';
import { Radar } from 'react-chartjs-2'
import './SpiderChart.css'

const SpiderChart = (props) => {

  const data = {
    labels: props.spiderLabels,
    datasets: [
      {
        label: props.name,
        backgroundColor: 'rgba(0,0,255,0.5)',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 2,
        data: props.associateSpiderData,
        pointRadius: 5
      },
      {
        label: 'Batch Average',
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 2,
        data: props.batchSpiderData,
        pointRadius: 5
      }
    ]
  }

  const options = {
    title: {
      display: false,
      backgroundColor: 'rgba(245,105,38,1)',
      fontSize: 16
    },
    legend: {
      display: true,
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet'
        ]
      },
      ticks: {
        beginAtZero: true,
        max: 100
      },
      pointLabels: {
        fontSize: 10
      }
    },
    tooltips: {
      xPadding: 20,
      yPadding: 10,
      displayColors: true,
      bodyFontSize: 16,
      bodyFontStyle: 'bold',
    },
    annotation: {
      annotations: 'line',
    }
  }

  return (
    <>
      <div className='chart container'>
        <h2 className='chart title'>{props.name} — Technical Status</h2>
        <Radar
          type='radar'
          data={data}
          options={options}
        />
      </div>
    </>
  )
}

export default SpiderChart;