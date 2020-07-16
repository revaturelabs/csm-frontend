import React from 'react';
import { Table, Popup, Modal } from 'semantic-ui-react';
import './DisplayAssociates.css';

const DisplayAssociate = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Table.Row key="associate.ID">
      <Table.Cell>{props.associate.ID}</Table.Cell>
      <Table.Cell>{props.associate.Name}</Table.Cell>
      <Table.Cell>{props.associate.batch}</Table.Cell>
      <Popup content='View Information' trigger={
        <div class="circular ui icon button" onClick={handleClickOpen}>
          <i class="icon eye"></i>
        </div>
      } />
      <Modal
        open={open}
        onClose={handleClose}>
        {/* TODO: Add components for SWOT */}
      </Modal>
    </Table.Row>
  )
}

export default DisplayAssociate