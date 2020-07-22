import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SwotsGrid from "../SwotsGrid/SwotsGrid";
import SwotsBar from "../SwotsBar/SwotsBar";

const ViewSwots = (props) => {
  const state = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();

  return (
    <>
      <SwotsBar />
      <SwotsGrid />
    </>
  );
};

export default ViewSwots;