import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { Container, Accordion, Icon } from 'semantic-ui-react';
import './DisplayAssociates.scss';
import DisplayAssociate from './DisplayAssociate';
// import AssociateService from '../../services/associate.service.js';
import BatchService from '../../services/batch.service.js';

const DisplayAssociates = (props) => {
    // const associatesState = useSelector(state => state.associateReducer);
    const batchesState = useSelector(state => state.batchReducer);
    const dispatch = useDispatch();
    // const history = useHistory(); 
    // const associateService = new AssociateService(); 
    const batchService = new BatchService();
    const [activeIndex, setActiveIndex] = useState(-1); 

    useEffect(() => { getBatch(); }, []); 

    const getBatch = async() => {
        let resp = await batchService.getBatches()
        dispatch({ type: 'updateBatches', batches: resp.data })
        console.log(batchesState.batches)
    }

    const handleClick = (e, titleProps) => {
        /* handles accordion functionality */
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    // test data only
    const testData = [
    {
        batchID: 1,
        batchName: '2005 Python',
        skill: 'Big Data',
        manager: 'Julie',
        trainer: [
            {
                role: '',
                employee: {
                    email: 'richard.orr@test',
                    firstName: 'Richard',
                    lastName: 'Orr',
                },
            }
        ],
        promotionDate: '5/5/2020', //I forget the date format
        associates: [
            {
                name: 'Associate 1',
                userID: 'test1@test.test',
            },
            {
                name: 'Associate 2',
                userID: 'test2@test.test'
            },
        ]
    },
    {
        batchID: 2,
        batchName: '2006 Java',
        skill: 'Big Data',
        manager: 'Julie',
        trainer: [
            {
                role: '',
                employee: {
                    email: 'john.doe@test',
                    firstName: 'John',
                    lastName: 'Doe',
                }
            },
            {
                role: '',
                employee: {
                    email: 'jane.smith@test',
                    firstName: 'Jane',
                    lastName: 'Smith',
                }
            }
        ],
        promotionDate: '5/5/2020', //I forget the date format
        associates: [
            {
                name: 'Associate 3',
                userID: 'test3@test.test'
            },
            {
                name: 'Associate 4',
                userID: 'test4@test.test'
            },
        ]
    }
]

    return (
        <Container>
            <header>List of Associates</header>

            {/* mapping each batch to its own accordion */}
            {testData.length > 0 ? testData.map((batch, ind) => {
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
                            <span class="trainer">
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