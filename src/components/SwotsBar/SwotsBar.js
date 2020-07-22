import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import AssociateService from '../../services/associate.service.js'
import "react-datepicker/dist/react-datepicker.css";
import './SwotsBar.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SwotsBar = () => {
	const associateService = new AssociateService();
	const dispatch = useDispatch();
	const startDate = useSelector((state) => state.swotReducer.startDate);
	const endDate = useSelector((state) => state.swotReducer.endDate);
	const name = "Justin Adams";
	const handleStartDate = (event) => {
		const getStartDate = event;
		dispatch({type: "updateStartDate", getStartDate});
	}
	const handleEndDate = (event) => {
		const getEndDate = event;
		dispatch({type: "updateEndDate", getEndDate});
	}

	return (
		<>
			<div id="flexbox">
				<h2>
				<label for="name">Associate: </label>
				<span id="name">{name}</span>
				<label for="startDate">Start Date:</label>
				<DatePicker id="startDate" name="startDate" selected={startDate} onChange={handleStartDate}></DatePicker>
				<label for="endDate">End Date:</label>
				<DatePicker id="endDate" name="endDate" selected={endDate} onChange={handleEndDate}></DatePicker>
				</h2>
			</div>
		</>
	)
}

export default SwotsBar;
