import React from 'react';
// import { Button } from '@material-ui/core/Button';
import { Table, Tooltip } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './DisplayAssociates.css'
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

    const renderHeader = () => {
        let headerElement = ['email', 'name', 'batch', 'actions']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <div>
            <header>List of Associates</header>
            <div id="table">
                <Table responsive='lg' hover>
                    <thead>{renderHeader()}
                    </thead>
                    <tbody id="data">
                        {Array.isArray(state.associates) ? state.associates.map(
                            (request) => {
                                return (
                                    <TableRow hover>
                                        <td>{request.email}</td>
                                        <td>{request.name}</td>
                                        <td>{request.batch}</td>
                                        {/* <td>{data.email}</td>
                            <td>{data.name}</td>
                            <td>{data.batch}</td> */}
                                        <Tooltip title="View Information" arrow>
                                            <IconButton variant='contained' color='primary' onClick={handleClickOpen}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit Information" arrow>
                                            <IconButton variant='contained' color='primary' onClick={handleClickOpen}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">View All The Information</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Here we'll see all the information correspondent to an employee.
                                    </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="email"
                                                    label="Email Address"
                                                    type="email"
                                                    defaultValue={data.email}
                                                    fullWidth
                                                />
                                                <TextField
                                                    margin="dense"
                                                    id="name"
                                                    label="Name"
                                                    type="text"
                                                    defaultValue={data.name}
                                                    fullWidth
                                                />
                                                <TextField
                                                    margin="dense"
                                                    id="batch"
                                                    label="Batch"
                                                    type="text"
                                                    defaultValue={data.batch}
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} variant="contained" color="primary">
                                                    Accept
                                    </Button>
                                                <Button onClick={handleClose} variant="contained" color="secondary">
                                                    Cancel
                                    </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </TableRow>
                                )
                            }
                        ) : null}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DisplayAssociates;