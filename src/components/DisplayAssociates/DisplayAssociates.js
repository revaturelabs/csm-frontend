import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Accordion, Icon, Menu } from 'semantic-ui-react';
import './DisplayAssociates.scss';
import DisplayAssociate from './DisplayAssociate';
import BatchService from '../../services/batch.service.js';

const DisplayAssociates = (props) => {
    const batchesState = useSelector(state => state.batchReducer);
    const manager = useSelector(state => state.managerReducer.manager);
    const dispatch = useDispatch();
    const batchService = new BatchService();
    const [activeIndex, setActiveIndex] = useState(-1); 

    useEffect(() => {
        const getBatch = async () => {
            let resp = await batchService.getBatches()
            let res = [];
            for(const batch of resp.data){
                if(batch.manager === manager.username){
                    res.push(batch);
                }
            }
            dispatch({ type: 'updateBatches', batches: resp.data })
            dispatch({type: 'updateDisplayBatches', batches: res})
        }
        getBatch();
    }, []);


    const handleClick = (e, titleProps) => {
        /* handles accordion functionality */
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const allFilter = ( batches, managerName) => {
        let res = [];
        if (managerName) {
            for(const batch of batches){
                if(batch.manager === managerName){
                    res.push(batch);
                }
            }
        } else {
            res = batches
        }
        
        dispatch({type: 'updateDisplayBatches', batches: res})
    }


    const newFilter = (managerName) => {
        const currentDate = new Date()
        const endRange = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay())
        const startRange = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay()-7)
        let res = [];
        for (const batch of batchesState.batches) {
            // YYYY-MM-DD
            let promoDate = new Date(batch.promotionDate)
            if ((promoDate < endRange) && (promoDate >= startRange)) {
                res.push(batch)
            }
        }
        allFilter(res, managerName)
    }

    const handleFilter = (event) => {
        const filter = event.target.id
        console.log(filter)
        dispatch({ type: 'updateFilter', filter: filter })
        const managerName = manager.username
        const otherName = managerName === 'Emily' ? 'Julie' : 'Emily'
        console.log(batchesState.activeFilter)
        switch(batchesState.activeFilter) {
            case 'myNew':
                newFilter(managerName);
            case 'myAll':
                allFilter(batchesState.batches, managerName);
            case 'otherNew':
                newFilter(otherName);
            case 'otherAll':
                allFilter(batchesState.batches, otherName);
            case 'all':
                allFilter(batchesState.batches );
            default:
                allFilter(batchesState.batches, managerName);
        }
    }

    return (
        <Container>
            <header>List of Associates</header>
            <Menu
            secondary>
                <Menu.Item
                id='myNew'
                active={batchesState.activeFilter === 'myNew'}
                onClick={(e) => handleFilter(e)}
                >My Newly Promoted Associates</Menu.Item>
                <Menu.Item
                id='myAll'
                active={batchesState.activeFilter === 'myAll'}
                onClick={(e) => handleFilter(e)}
                >All My Associates</Menu.Item>
                <Menu.Item
                id='otherNew'
                active={batchesState.activeFilter === 'otherNew'}
                onClick={(e) => handleFilter(e)}
                >OTHER's Newly Promoted Associates</Menu.Item>
                <Menu.Item
                id='otherAll'
                active={batchesState.activeFilter === 'otherAll'}
                onClick={(e) => handleFilter(e)}
                >All OTHER's Associates</Menu.Item>
                <Menu.Item
                id='all'
                active={batchesState.activeFilter === 'all'}
                onClick={(e) => handleFilter(e)}
                >All Associates</Menu.Item>
            </Menu>
            {/* mapping each batch to its own accordion */}
            {batchesState.displayBatches.length > 0 ? batchesState.displayBatches.map((batch, ind) => {
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

