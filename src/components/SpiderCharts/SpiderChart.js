import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Radar } from 'react-chartjs-2'
import './SpiderChart.css'
import AssociateService from '../../services/associate.service'

const SpiderChart = (props) => {

    console.log(props)
    const associateScore = []
    const labels = []
    const batchScore = []

    for (const qcEval of props.batchSpider) {
        labels.push(qcEval.assessmentType)
        batchScore.push(qcEval.score)
    }

    for (const qcEval of props.assocSpider) {
        associateScore.push(qcEval.score)
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: props.userID,
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: associateScore, //evalState.associateValues,
                pointRadius: 5
            },
            {
                label: 'Batch Average',
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: batchScore, // evalState.batchValues,
                pointRadius: 5
            }
        ]
    }

    return (
        <>
            <div id='chart'>
                {/* <h2 id='title'>J2EE - Technical Status</h2> */}
                <Radar
                    type='radar'
                    data={data}
                    options={{
                        title: {
                            display: false,
                            backgroundColor: 'rgba(245,105,38,1)',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            psotion: 'left',
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
                                fontSize: 16
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
                    }}
                />
            </div>
        </>
    )
}

export default SpiderChart;