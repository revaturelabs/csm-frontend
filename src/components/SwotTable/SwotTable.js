import React from "react";
import './SwotTable.css';
import {Table} from "semantic-ui-react";
import SwotQuadrant from '../SwotQuadrant/SwotQuadrant';


/**
 * SwotTable is the parent and wrapper component for the SwotQuadrants.
 * It builds the layout of the quadrants, and also names them based on the sections 
 * of SWOT analysis
 * It expects no props, and uses no data from the store
 */
const SwotTable = () => {
    return (
        <Table id='quadrant-table'
        attached='bottom'
        size='small'>
              <Table.Body>
                <Table.Row 
                id='row1'>
                  <Table.Cell>
                    <SwotQuadrant name='Strengths'></SwotQuadrant>
                  </Table.Cell>
                  <Table.Cell>
                    <SwotQuadrant name='Weaknesses'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                id='row2'>
                  <Table.Cell>
                    <SwotQuadrant name='Opportunities'></SwotQuadrant>
                  </Table.Cell>
                  <Table.Cell>
                    <SwotQuadrant name='Threats'></SwotQuadrant>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
        </Table>
    )
}
export default SwotTable;
