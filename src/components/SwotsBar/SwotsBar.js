<<<<<<< HEAD
import React from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import DatePicker from 'react-datepicker';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SwotService from '../../services/swot.service.js';
import './SwotsBar.css';

const SwotsBar = (props) => {
    const associate = useSelector((state) => state.swotReducer.currentAssociate);
    const swots = useSelector((state) => state.swotReducer.swots);
    const displaySwots = useSelector((state) => state.swotReducer.displaySwots);
    let startDate = new Date(useSelector((state) => state.swotReducer.currentAssociate.proDate));
    let endDate = new Date(useSelector((state) => state.swotReducer.endDate));
    const dispatch = useDispatch();
    const history = useHistory();
    const filterSwots = () => {
        for (const swot of swots) {
            if(swot.date_created >= startDate && swot.date_created <= endDate) {
                displaySwots.push(swot);
            }
        }
        dispatch({type: 'updateDisplaySwots', getDisplaySwots: displaySwots})
    }
    const handleStartDate = (date) => {
        startDate = date;
        dispatch({type: 'updateStartDate', startDate: date});
        filterSwots();
    }

    const handleEndDate = (date) => {
        endDate = date;
        dispatch({type: 'updateEndDate', endDate: date});
        filterSwots();
    }

    const addSwot = () => {
        const data = {
          date: null,
          Strengths: [],
          Weaknesses: [],
          Opportunities: [],
          Threats: [],
          Notes: ''
        }
        dispatch({type: 'updateEditable', editable: true})
        dispatch({type: 'updateSWOT', SWOT: data})
        history.push('/editSWOT')
    }

    return (
        <Menu size={'huge'}>
            <Menu.Item>
                {associate.name}
            </Menu.Item>
            <Menu.Item>
                {associate.batch_id}
            </Menu.Item>
            <Menu.Item>
                <Button
                onClick={() => addSwot()}>+ SWOT</Button>
            </Menu.Item>
            <Menu.Item>
                Start Date: &nbsp;
                <DatePicker selected={startDate} onChange={handleStartDate}></DatePicker>
                &nbsp; End Date: &nbsp;
                <DatePicker selected={endDate} onChange={handleEndDate}></DatePicker>
            </Menu.Item>
        </Menu>
    )
}
=======
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { Menu, Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./SwotsBar.css";
import "react-datepicker/dist/react-datepicker.css";

const SwotsBar = (props) => {
  const startDate = useSelector((state) => state.swotReducer.startDate);
  const endDate = useSelector((state) => state.swotReducer.endDate);
  const associate = useSelector((state) => state.swotReducer.currentAssociate);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleStartDate = (date) => {
    dispatch({ type: "updateStartDate", startDate: date });
  };

  const handleEndDate = (date) => {
    dispatch({ type: "updateEndDate", endDate: date });
  };

  const handleBack = (e) => {
    e.preventDefault();
    dispatch({ type: "updateAssociate", associate: {} });
    history.push("/promotedlastweek");
  };

  const addSwot = () => {
    const data = {
      date: null,
      Strengths: [],
      Weaknesses: [],
      Opportunities: [],
      Threats: [],
      Notes: "",
    };
    dispatch({ type: "updateEditable", editable: true });
    dispatch({ type: "updateSWOT", SWOT: data });
    history.push("/editSWOT");
  };

  return (
    <Menu size={"huge"}>
      <Menu.Item>
        <Button icon onClick={handleBack}>
          <Icon name={"arrow left"} />
        </Button>
      </Menu.Item>
      <Menu.Item>{associate.name}</Menu.Item>
      <Menu.Item>{associate.batch_id}</Menu.Item>
      <Menu.Item>
        <Button onClick={() => addSwot()}>+ SWOT</Button>
      </Menu.Item>
      <Menu.Item>
        Start Date: &nbsp;
        <DatePicker
          selected={startDate}
          onChange={handleStartDate}
        ></DatePicker>
        &nbsp; End Date: &nbsp;
        <DatePicker selected={endDate} onChange={handleEndDate}></DatePicker>
      </Menu.Item>
    </Menu>
  );
};
>>>>>>> d822b9384fbdaefd6e36d4865231188cc2dff18d

export default SwotsBar;
