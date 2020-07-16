import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, Icon, Popup, Modal, Input } from 'semantic-ui-react';
import './DisplayAssociates.css';
import DisplayAssociate from './DisplayAssociate';
import AssociateService from '../../services/associate.service.js';

const DisplayAssociates = (props) => {
    const associatesState = useSelector(state => state.associateReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const associateService = new AssociateService();


    useEffect(() => {
        console.log("useEffect")

        getAssociatesInformation();
    }, []);

    // TODO: Get real manager id
    const testManager = {id: '{managerId}'}

    async function getAssociatesInformation() {
        let resp = await associateService.getAssociatesByManager(testManager.id)
        console.log(resp)
        dispatch({ type: 'updateAssociates', associates: resp.data })
        console.log(associatesState.associates)
    }

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
                        {Array.isArray(associatesState.associates) ? associatesState.associates.map((associate) => { return ( <DisplayAssociate associate={associate}/> )
                        }): null }
                    </Table.Body>
                </Table>
            </div>
        </div >
    )
}

export default DisplayAssociates;