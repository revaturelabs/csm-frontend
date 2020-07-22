import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SwotsGrid from "../SwotsGrid/SwotsGrid";

const ViewSwots = (props) => {
  const state = useSelector((state) => state.swotReducer);
  const dispatch = useDispatch();

  return (
    <>
      {/* Search */}
      <SwotsGrid />
    </>
  );
};

export default ViewSwots;