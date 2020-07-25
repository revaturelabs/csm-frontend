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
