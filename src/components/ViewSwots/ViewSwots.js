import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SwotService from "../../services/swot.service";
import SwotsGrid from "../SwotsGrid/SwotsGrid";
import SwotsBar from "../SwotsBar/SwotsBar";

const ViewSwots = (props) => {
    const email = useSelector((state) => state.swotReducer.currentAssociate.email);
    const dispatch = useDispatch();
    const swotService = new SwotService();
    useEffect(() => {
        async function getSwots() {
            const swots = await swotService.getSwots(email);
            dispatch({ type: "updateSwots", getSwots: swots});
        }
    getSwots();
    }, [dispatch]);
  return (
    <>
      <SwotsBar />
      <SwotsGrid />
    </>
  );
};

export default ViewSwots;
