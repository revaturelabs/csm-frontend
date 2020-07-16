import React from 'react';
import { Button, Table, Icon, Popup, Modal, Input } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import './DisplayAssociates.css'

const DisplayAssociates = (props) => {
    const state = useSelector(state => state);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const data = { email: 'echavarria.f@gmail.com', name: 'Felix Echavarria', batch: 'WVU' };

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
                    </Table.Body>
                </Table>
            </div>
        </div >
    )
}

export default DisplayAssociates;