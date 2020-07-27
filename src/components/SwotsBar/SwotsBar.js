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

  const roundDate = (date) => {
    date -= date % (24 * 60 * 60 * 1000);//subtract amount of time since midnight
    date += new Date().getTimezoneOffset() * 60 * 1000;//add on the timezone offset
    return new Date(date);
  }

  const filter = (start, end) => {
    let swots = associate.swot;
    swots = swots.filter(
      (swot) =>
        roundDate(new Date(swot.date_created)) >= roundDate(new Date(start)) &&
        roundDate(new Date(swot.date_created)) <= roundDate(new Date(end))
    );
    dispatch({ type: "updateDisplaySwots", swots: swots });
  };

  const handleStartDate = (date) => {
    filter(date, endDate);
    dispatch({ type: "updateStartDate", startDate: date });
  };

  const handleEndDate = (date) => {
    filter(startDate, date);
    dispatch({ type: "updateEndDate", endDate: date });
  };

  const handleBack = (e) => {
    e.preventDefault();
    dispatch({ type: "updateAssociate", associate: {} });
    dispatch({ type: "setStartDate", date: new Date(new Date().setDate(new Date().getDate() - 14))})
    dispatch({ type: "setEndDate", date: new Date()})
    history.push("/promotedlastweek");
  };

  const addSwot = () => {
    const data = {
      date_created: new Date(),
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
    <Menu size={"huge"} secondary>
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

export default SwotsBar;
