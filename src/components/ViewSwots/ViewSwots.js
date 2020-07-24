import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SwotService from "../../services/swot.service";
import SwotsGrid from "../SwotsGrid/SwotsGrid";
import SwotsBar from "../SwotsBar/SwotsBar";

const ViewSwots = (props) => {
  return (
    <>
      <SwotsBar />
      <SwotsGrid />
    </>
  );
};

export default ViewSwots;
