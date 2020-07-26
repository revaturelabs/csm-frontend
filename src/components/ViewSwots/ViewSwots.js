import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import SwotsGrid from "../SwotsGrid/SwotsGrid";
import SwotsBar from "../SwotsBar/SwotsBar";

const ViewSwots = (props) => {
  const currentAssociate = useSelector(state => state.swotReducer.currentAssociate)

  return (
    <>
      {Object.keys(currentAssociate).length !== 0 ? 
      <>
        <SwotsBar />
        <SwotsGrid /> 
      </>
       : <Redirect to={{pathname:"/promotedlastweek"}}/>}
    </>
  );
};

export default ViewSwots;
