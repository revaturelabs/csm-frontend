import React from "react";
import './SwotTable.css';
import {Table} from "semantic-ui-react";
import SwotQuadrant from '../SwotQuadrant/SwotQuadrant';

const SwotTable = props => {
    return (
        <Table id='quadrant-table'
        attached='bottom'
        size='large'>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <SwotQuadrant name='Strengths'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <SwotQuadrant name='Weaknesses'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <SwotQuadrant name='Opportunities'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <SwotQuadrant name='Threats'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
        </Table>
    )
}
export default SwotTable;