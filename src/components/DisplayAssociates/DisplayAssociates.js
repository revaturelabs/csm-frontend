import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.scss';
import DisplayAssociate from './DisplayAssociate';
import BatchService from '../../services/batch.service.js';

const DisplayAssociates = (props) => {
    const batchesState = useSelector(state => state.batchReducer);
    const dispatch = useDispatch(); 
    const batchService = new BatchService();
    const [activeIndex, setActiveIndex] = useState(-1); 

    useEffect( () => {
        const getBatch = async () => {
            let resp = await batchService.getBatches()
            dispatch({ type: 'updateBatches', batches: resp.data })
        }
        getBatch();
    }, []); 

    // const testData = [
    //     {
    //         batchID: 'TR-1077',
    //         batchName: 'Mock Batch 48',
    //         skill: 'Big Data',
    //         manager: 'Julie',
    //         trainer: [
    //             {
    //                 role: "ROLE_LEAD_TRAINER",
    //                 employee: {
    //                     email: "mock1048.employee381fdc34-12af-48ee-87d3-20fcd312ec16@mock.com",
    //                     firstName: "Mock 1048",
    //                     lastName: "Associate 1048"
    //                 },
    //             }
    //         ],
    //         promotionDate: "2016-10-07", //I forget the date format
    //         associates: [
    //             {
    //                 name: "Mock 15 Associate 15",
    //                 userID: "mock1.associate021f85bc-035e-404e-81e8-eef036afc06a@mock.com",
    //             },
    //             {
    //                 name: "Mock 2 Associate 2",
    //                 userID: "mock2.associate021f85bc-035e-404e-81e8-eef036afc06a@mock.com",
    //             },
    //         ]
    //     }
    // ]


    const handleClick = (e, titleProps) => {
        /* handles accordion functionality */
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    return (
        <Container>
            <header>List of Associates</header>

            {/* mapping each batch to its own accordion */}
            {batchesState.batches.length > 0 ? batchesState.batches.map((batch, ind) => {
                return (
                    <Accordion styled className='batch-accordion' key={batch.batchID}>
                        <Accordion.Title
                            active={activeIndex === ind}
                            index={ind}
                            onClick={handleClick}
                            className="title">
                            <Icon name='dropdown' />
                            {/* keys below may change with backend response */}
                            <span className='info'>{batch.batchName} </span> 
                            <span className="trainer">
                                {batch.trainer.length > 0 ? 
                                    batch.trainer.map( (trainer, ind) => {
                                        return (
                                            <span key={trainer.employee.email} className='info inline-join-list'>
                                                {trainer.employee.firstName} {trainer.employee.lastName}
                                            </span>
                                        )
                                }) : null }
                            </span>
                            <span className='info'>{batch.promotionDate} </span> 
                            <span className='info'>
                                {batch.associates.length} Associates
                            </span>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === ind}>
                            {batch.associates.length > 0 ? batch.associates.map(
                                (associate) => {
                                    return (
                                        <DisplayAssociate key={associate.userID}
                                            associate={associate}
                                            manager={batch.manager}
                                            batchName={batch.batchName}
                                            batchProDate={batch.promotionDate}
                                        />
                                    )
                                })
                            : null }
                        </Accordion.Content>
                    </Accordion>
                )
            })
        : null }

        </Container>
    )
}

export default DisplayAssociates;