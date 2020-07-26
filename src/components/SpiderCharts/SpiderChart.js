import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Radar } from 'react-chartjs-2'
import './SpiderChart.css'
import AssociateService from '../../services/associate.service'

const SpiderChart = (props) => {
    // const [evalState, setEvals] = useState([])
    // const [labels, setLabels] = useState([''])
    // const [batchValues, setBatchValues] = useState([])
    // const [associateValues, setAssociateValues] = useState([])
    // const associateService = new AssociateService()
    // const dispatch = useDispatch();

    // useEffect(() => {

    //     // async function getEvals(){
    //     //     console.log(props.userID)
    //     //     console.log("loading spider data")
    //     //     // const associateAssesment = []
    console.log(props)
    const associateScore = []
    const labels = []
    const batchScore = []

    //     //     const resp = await associateService.getEvaluations(props.userID); 
    //     console.log("from chart")
    //     console.log(props.batchSpider)
    //     console.log(props.assocSpider)
    for (const qcEval of props.batchSpider) {
        labels.push(qcEval.assessmentType)
        batchScore.push(qcEval.score)
    }

    for (const qcEval of props.assocSpider) {
        associateScore.push(qcEval.score)
    }

    //     setLabels(batchAssesment)
    //     setBatchValues(batchScore)
    //     setAssociateValues(associateScore)
    //     // // }
    //     // getEvals();
    //     // setLabels(batchAssesment)

    //     // dispatch({ type: 'setBatchLabels', batchLabels: batchAssesment })
    //     // dispatch({ type: 'setBatchValues', batchValues: batchScore })
    //     // dispatch({ type: 'setAssociateLabels', associateLabels: associateAssesment })
    //     // dispatch({ type: 'setAssociateValues', associateValues: associateScore })
    // }, []);

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