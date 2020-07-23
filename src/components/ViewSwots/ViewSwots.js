import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SwotsGrid from "../SwotsGrid/SwotsGrid";
import SwotsBar from "../SwotsBar/SwotsBar";

const ViewSwots = (props) => {
  const state = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();
  const email = props.associate.email;
  const swotService = new SwotService();
  const swots = swotService.getSwots(email);
  dispatch({type: 'updateSwots', getSwots: swots })

  return (
    <>
      <SwotsBar />
      <SwotsGrid />
    </>
  );
};

export default ViewSwots;
