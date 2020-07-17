import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Chart } from 'chart.js';
import { Radar } from 'react-chartjs-2'
import { Table } from 'semantic-ui-react';
import './Chart.css'

const SpiderChart = (props) => {

    const state = {
        // TODO: 
        // We need to extract from DB:
        // labels
        // dataset.label
        // dataset.data
        labels: ['JavaScript', 'Java', 'SQL', 'Servlet', 'Hibernate', 'Spring',
            'Microservices'],
        datasets: [
            {
                label: 'J2EE',
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 2,
                data: [65, 70, 80, 81, 56, 80, 75]
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
                <Table>
                    <Table.Row>
                        <Table.Cell>Subject</Table.Cell>
                        <Table.Cell>Score</Table.Cell>
                    </Table.Row>
                <Table.Row key="technology.ID">
                    <Table.Cell>{props.technology.Name}</Table.Cell>
                    <Table.Cell>{props.technology.Score}</Table.Cell>
                </Table.Row>
                </Table>
            </div>
        </>
    )
}

export default SpiderChart;