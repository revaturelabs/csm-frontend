import React from "react";
import { Button, Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

const SwotQuadrantTable = (props) => {
    const swotState = useSelector((state) => state.swotReducer);
    const dispatch = useDispatch();
}