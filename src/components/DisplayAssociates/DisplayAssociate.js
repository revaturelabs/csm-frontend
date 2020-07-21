import React from 'react';
import { Table, Popup } from 'semantic-ui-react';
import './DisplayAssociates.css';

const DisplayAssociate = (props) => {

  return (
    <Table.Row>
      <Table.Cell>{props.associate.ID}</Table.Cell>
      <Table.Cell>{props.associate.Name}</Table.Cell>
      <Table.Cell>{props.associate.batch}</Table.Cell>
      <Popup content='View Information' trigger={
        <div class="circular ui icon button" onClick={handleClickOpen}>
          <i class="icon eye"></i>
        </div>
      } />
    </Table.Row>
  )
}

export default DisplayAssociate