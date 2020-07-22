import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.css';
import DisplayAssociate from './DisplayAssociate';
import AssociateService from '../../services/associate.service.js';
import BatchService from '../../services/batch.service.js';
import { render } from '@testing-library/react';

export default class DisplayAssociates extends Component {
    state = { activeIndex: -1 }
    // associatesState = useSelector(state => state.associateReducer);
    // batchesState = useSelector(state => state.batchReducer);
    // dispatch = useDispatch();
    // history = useHistory();
    // associateService = new AssociateService();
    // batchService = new BatchService();

    // useEffect(() => {
    //     console.log("useEffect");
    //     getAssociatesInformation();
    // }, []);

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    // TODO: Get real manager id
    testManager = { id: '{managerId}' };

    // async function getAssociatesInformation() {
    //     let resp = await associateService.getAssociatesByManager(testManager.id)
    //     console.log(resp)
    //     dispatch({ type: 'updateAssociates', associates: resp.data })
    //     console.log(associatesState.associates)
    // }

    // async function getBatches() {
    //     let resp = await batchService.getBatches()
    //     console.log(resp)
    //     dispatch({ type: 'updateBatches', batches: resp.data })
    //     console.log(associatesState.associates)

    // }

    batchName='Python'
    trainer='Richard Orr'
    pro_date='07/31/2020'
    no_associates=17

    render() {
        const { activeIndex } = this.state;

        return (
            <div>
                <header>List of Associates</header>

                <Accordion styled>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                        className="title">
                        <Icon name='dropdown' />
                        {/* {this.props.title} */}
                        <span className='title'>{this.batchName} </span>
                        <span className='info'>{this.trainer} </span>
                        <span className='info'>{this.pro_date} </span> 
                        <span className='info'>{this.no_associates} Associates</span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <DisplayAssociate />
                    </Accordion.Content>
                </Accordion>

            </div >
        )
    }
}