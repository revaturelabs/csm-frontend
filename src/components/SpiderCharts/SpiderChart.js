import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Radar } from 'react-chartjs-2'
import './SpiderChart.css'

const SpiderChart = (props) => {

    const evalState = useSelector(state => state.evalReducer);
    const dispatch = useDispatch();

    const associateAssesment = []
    const associateScore = []
    const batchAssesment = []
    const batchScore = []

    useEffect(() => {
        for (const qcEval of props.spider_batch) {
            batchAssesment.push(qcEval.assessmentType)
            batchScore.push(qcEval.score)
        }
        for (const qcEval of props.spider_associate) {
            associateAssesment.push(qcEval.assessmentType)
            associateScore.push(qcEval.score)
        }
        dispatch({ type: 'setBatchLabels', batchLabels: batchAssesment })
        dispatch({ type: 'setBatchValues', batchValues: batchScore })
        dispatch({ type: 'setAssociateLabels', associateLabels: associateAssesment })
        dispatch({ type: 'setAssociateValues', associateValues: associateScore })
    }, []);

    const state = {
        labels: evalState.batchLabels,
        datasets: [
            {
                label: props,
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: evalState.associateValues,
                pointRadius: 5
            },
            {
                label: 'Batch Average',
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: evalState.batchValues,
                pointRadius: 5
            }
        ]
    }

    return (
        <>
            <div id='chart'>
                <h2 id='title'>J2EE - Technical Status</h2>
                <Radar
                    type='radar'
                    data={state}
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