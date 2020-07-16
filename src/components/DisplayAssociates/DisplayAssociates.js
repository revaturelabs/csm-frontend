import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, Icon, Popup, Modal, Input } from 'semantic-ui-react';
import './DisplayAssociates.css';
<<<<<<< HEAD
import AssociateService from '../../services/associate.service.js';

const DisplayAssociates = (props) => {
    const state = useSelector(state => state);
=======
import DisplayAssociate from './DisplayAssociate';
import AssociateService from '../../services/associate.service.js';

const DisplayAssociates = (props) => {
    const associatesState = useSelector(state => state.associateReducer);
>>>>>>> 2fe32a64e099a34d48265e72963a87cfd7c255c5
    const dispatch = useDispatch();
    const history = useHistory();
    const associateService = new AssociateService();


    useEffect(() => {
        console.log("useEffect")
<<<<<<< HEAD

        getAssociatesInformation();
    }, []);

    async function getAssociatesInformation() {
        let resp = await associateService.getAssociatesInformation()
        console.log(resp)
        dispatch({ type: 'setAssociatesInformation', requests: resp.data })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
=======
>>>>>>> 2fe32a64e099a34d48265e72963a87cfd7c255c5

        getAssociatesInformation();
    }, []);

<<<<<<< HEAD
=======
    // TODO: Get real manager id
    const testManager = {id: '{managerId}'}

    async function getAssociatesInformation() {
        let resp = await associateService.getAssociatesByManager(testManager.id)
        console.log(resp)
        dispatch({ type: 'updateAssociates', associates: resp.data })
        console.log(associatesState.associates)
    }

>>>>>>> 2fe32a64e099a34d48265e72963a87cfd7c255c5
    return (
        <div>
            <header>List of Associates</header>
            <div id="table">
                <Table selectable color={"black"}>
                    <Table.Header className="head">
                        <Table.Row>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Batch</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
<<<<<<< HEAD
                        {/* {Array.isArray(state.associates) ? state.associates.map(
                            (request) => {
                                return ( */}
                        <Table.Row>
                            {/* <td>{request.email}</td>
                                        <td>{request.name}</td>
                                        <td>{request.batch}</td> */}
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.batch}</Table.Cell>
                            <Popup content='View Information' trigger={
                                <div class="circular ui icon button" onClick={handleClickOpen}>
                                    <i class="icon eye"></i></div>
                            } />
                        </Table.Row>
                        <Modal
                            open={open}
                            onClose={handleClose}>
                            <Modal.Header> Employee Information</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <div class="ui input">
                                        <label>Email:</label>
                                        <input class="ui input" type="email" value={data.email} />
                                    </div>
                                    <br />
                                    <div class="ui input">
                                        <label>Name:</label>
                                        <input class="ui input" type="text" value={data.name} />
                                    </div>
                                    <br />
                                    <div class="ui input">
                                        <label>Batch:</label>
                                        <input type="text" value={data.batch} />
                                    </div>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        {/*  )
                             }
                         ) : null} */}
=======
                        {Array.isArray(associatesState.associates) ? associatesState.associates.map((associate) => { return ( <DisplayAssociate associate={associate}/> )
                        }): null }
>>>>>>> 2fe32a64e099a34d48265e72963a87cfd7c255c5
                    </Table.Body>
                </Table>
            </div>
        </div >
    )
}

export default DisplayAssociates;