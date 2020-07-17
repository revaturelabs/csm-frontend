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
        { Name: "JavaScript", Score: 65 },
        { Name: "Java", Score: 70 },
        { Name: "SQL", Score: 80 },
        { Name: "Servlet", Score: 81 },
        { Name: "Hibernate", Score: 56 },
        { Name: "Spring", Score: 80 },
        { Name: "Microservices", Score: 75 }];

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
                data: Scores
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

                        }
                    }}
                />
                <Table selectable color={"black"}>
                    <Table.Header className="head">
                        <Table.Row>
                            <Table.HeaderCell>Subject</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {/* <Table.Cell>{Names}</Table.Cell>
                        <Table.Cell>{Scores}</Table.Cell> */}
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default SpiderChart;