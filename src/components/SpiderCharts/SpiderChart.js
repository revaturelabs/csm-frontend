import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Radar } from 'react-chartjs-2'
import { Table } from 'semantic-ui-react';
import './SpiderChart.css'

const SpiderChart = (props) => {
    let Names = [];
    let Scores = [];

    var name_score = [
        { Name: "JavaScript", Score: 70 },
        { Name: "Java", Score: 83 },
        { Name: "SQL", Score: 84 },
        { Name: "Servlet", Score: 85 },
        { Name: "Hibernate", Score: 99 },
        { Name: "Spring", Score: 86 },
        { Name: "Microservices", Score: 87 }];

    for (let index = 0; index < name_score.length; index++) {
        Scores[index] = name_score[index].Score;
        Names[index] = name_score[index].Name
    }

    const spiderState = useSelector(state => state.spiderReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const state = {
        // TODO: 
        // We need to extract from DB:
        // labels
        // dataset.label
        // dataset.data
        // labels: ['JavaScript', 'Java', 'SQL', 'Servlet', 'Hibernate', 'Spring',
        //     'Microservices'],
        labels: Names,
        datasets: [
            {
                label: 'J2EE',
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                // data: [65, 70, 80, 81, 56, 80, 75]
                data: Scores,
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
                {/* <Table selectable color={"black"}>
                    <Table.Header className="head">
                        <Table.Row>
                            <Table.HeaderCell>Subject</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {/* <Table.Cell>{Names}</Table.Cell>
                        <Table.Cell>{Scores}</Table.Cell> 
                    </Table.Body>
                </Table> */}
            </div>
        </>
    )
}

export default SpiderChart;