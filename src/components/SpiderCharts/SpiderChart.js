import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Radar } from 'react-chartjs-2'
import { Table } from 'semantic-ui-react';
import './SpiderChart.css'

const SpiderChart = (props) => {
    let Names = [];
    let Names2 = [];
    let Scores = [];
    let Scores2 = [];

    var name_score = [
        { Name: "JavaScript", Score: 75 },
        { Name: "Java", Score: 75 },
        { Name: "SQL", Score: 75 },
        { Name: "Servlet", Score: 75 },
        { Name: "Hibernate", Score: 75 },
        { Name: "Spring", Score: 75 },
        { Name: "Microservices", Score: 75 }];

    for (let index = 0; index < name_score.length; index++) {
        Scores[index] = name_score[index].Score;
        Names[index] = name_score[index].Name;
        Names2[index] = name_score[index].Name;
        Scores2[index] = name_score[index].Score+10;
    }
    console.log(Scores);
    console.log(Scores2);

    const spiderState = useSelector(state => state.spiderReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const state = {
        // TODO: 
        // We need to extract from DB:
        // labels
        // dataset.label
        // dataset.data
        // and the average of the batch
        labels: Names,
        datasets: [
            {
                label: 'J2EE',
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: Scores,
                pointRadius: 5
            },
            {
                label: 'Batch Average',
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: Scores2,
                pointRadius: 5

            }
        ]

    }

    return (
        <>
            <div id='chart'>
                {/* TODO: 
                We need to extract from DB:
                title
                data */}
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