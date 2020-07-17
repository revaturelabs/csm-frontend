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