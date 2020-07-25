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

    const testData = {
        "batchID": "TR-1653",
        "batchName": "Mock Batch 425",
        "skill": "PEGA",
        "manager": "Emily",
        "promotionDate": "2020-07-29",
        "trainer": [
            {
                "role": "ROLE_LEAD_TRAINER",
                "employee": {
                    "email": "mock1425.employeedadec181-3f5d-4217-a8a6-2a2546b7947a@mock.com",
                    "firstName": "Mock 1425",
                    "lastName": "Associate 1425"
                },
            }
        ],
        "associates": [
            {
                "name": "Mock 9 Associate 9",
                "userID": "mock9.associate4fbf28f4-6bfc-4c7f-b5bc-fb9eda4bda55@mock.com"
            },
        ]
    }

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
                                (associate, ind) => {
                                    return (
                                        <DisplayAssociate key={associate.userID}
                                            ind={ind}
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
