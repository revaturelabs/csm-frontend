import React from "react";
import "./SwotTable.scss";
import { Grid } from "semantic-ui-react";
import SwotQuadrant from "../SwotQuadrant/SwotQuadrant";

/**
 * SwotTable is the parent and wrapper component for the SwotQuadrants.
 * It builds the layout of the quadrants, and also names them based on the sections
 * of SWOT analysis
 * It expects no props, and uses no data from the store
 */
const SwotTable = () => {
  return (
    <Grid stackable columns={2} id="swot-table">
      <Grid.Row>
        <Grid.Column>
          <SwotQuadrant name="Strengths"></SwotQuadrant>
        </Grid.Column>
        <Grid.Column>
          <SwotQuadrant name="Weaknesses"></SwotQuadrant>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <SwotQuadrant name="Opportunities"></SwotQuadrant>
        </Grid.Column>
        <Grid.Column>
          <SwotQuadrant name="Threats"></SwotQuadrant>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default SwotTable;
